// Modules used for this project or page-----------------------------------------
import React, { useState, useEffect } from 'react';
import RequestsForm from '../components/RequestsForm';
import firebase from '../firebase/firebase';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import axios from 'axios';
import { useHistory } from 'react-router';
//-------------------------------------------------------------------------------


// This is the Requests Component -----------------------------------------------------
const RequestList = (props) => {
    // console.log(props.user);

    // These are the state for this component -------------------------------------------
    const history = useHistory()
    const [contactObjects, setContactObjects] = useState([])
    const [currentId, setCurrentId] = useState();
    const [users, setUsers] = useState([]);
    const [yourRequests, setYourRequests] = useState([]);
    const firebaseDb = firebase.database().ref();
    //-------------------------------------------------------------------------------

    //UseEffect fetch all data from the api-----------------------------------------


    useEffect(() => {
        axios.get("/api/clients/listall").then(res => {
            // console.log("2na be 2wal useEffect");
            // console.log(res.data)
            setUsers(res.data)
            // console.log(users)

        }).catch(error => console.log(error))
    }, [])



    useEffect(() => {

        for (var i = 0; i < users.length; i++) {
            if (props.user == users[i].username) {
                // console.log("2na kamen jowa")
                console.log(users[i])
                setCurrentId(users[i].Id)
                break
            }
        }
    }, [users])

    useEffect(() => {

        axios.get("/api/requests/listall").then(res => {
            setContactObjects(res.data)
        }
        ).catch(error => console.log(error))

        // if (props.user == "admin@admin.com"){
        //     console.log("2na jowa 3rd effect 1st part")
        //     axios.get("/api/requests/listall").then(res => {
        //         setContactObjects(res.data)
        //     }
        //     ).catch(error => console.log(error))
        // }else{
        //     console.log("2na jowa 3rd effect 2nd part")
        //     axios.get("/api/requests/listall").then(res =>{
        //         var temp = res.data
        //         var temp = temp.filter(obj => obj.client_id == currentId)
        //         setContactObjects(temp)
        //     }).then(console.log("done mafroud")).catch(err => console.log(err))
        // }
    }, [currentId])


    //-----------------------------------------------------------------------------------------------------------------------------------

    //add new request using api-------------------------------------------------------------------------------------------------------------------
    const addorEdit = (obj) => {
        axios.post("/api/requests/add?client_id=" + currentId + "&amount=" + obj.amount + "&currency=" + obj.currency + "&action=" + obj.action)
            .then(res => console.log(res.data)).then(done => window.location.reload()).catch(error => console.log("sorry", error))
    }


    //-----------------------------------------------------------------------------------------------------------------------------------

    //Find request for specfic user or clinet if not an admin-----------------------------------------------------------------------------

    const findUsers = (request) => {
        for (var i = 0; i < users.length; i++) {
            if (users[i].Id == request) {
                return users[i].username
            }
        }
    }
    //------------------------------------------------------------------------------------------------------------------------------------


    //Delete specific request------------------------------------------------------------------------------------------------------------

    const onDelete = (id) => {
        if (window.confirm('Are you sure to delete this request ? ')) {
            axios.post("/api/requests/delete?id=" + id)
                .then(res => console.log(res.data)).then(done => window.location.reload()).catch(err => console(err))
        }
    }


    //------------------------------------------------------------------------------------------------------------------------------------




    // console.log(currentId);
    // console.log(users);
    console.log(props.user)
    //===================================================================================================================================
    return (
        <>

            <div >

                <div className="row">
                    <table className="table table-borderless table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th>Amount </th>
                                <th>Currency </th>
                                <th>Action </th>
                                {/* <th>Status</th> */}
                                {props.user == "admin@admin.com" ? <th>User</th> : ""}
                                {/* <th>User</th> */}
                                {props.user == "admin@admin.com" ? <th>Edit and Delete</th> : ""}
                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor:"white" }}>
                            {
                                props.user != "admin@admin.com" ? contactObjects.filter(obj => obj.client_id == currentId).map(
                                    request => {
                                        console.log("@na")
                                        return <tr key={request.Id} >
                                            <td>{request.amount}</td>
                                            <td>{request.currency}</td>
                                            <td>{request.action}</td>
                                            {/* <td>{contactObjects[id].status}</td> */}
                                            {/* <td>{contactObjects[id].address}</td> */}
                                            {/* <td>{contactObjects[id].user}</td> */}
                                            {/* {contactObjects[id].status == "Accepted" || contactObjects[id].status == "Rejected" ? <td></td> :<td>
                                        <a className="btn text-primary" onClick = {()=>{setCurrentId(id)}}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick = {()=>{onDelete(id)}}>
                                                <i className="fas fa-trash-alt"></i>
                                            </a>
                                        </td>} */}
                                        </tr>
                                    }
                                ) : contactObjects.map(
                                    request => {
                                        return <tr key={request.Id} >
                                            <td>{request.amount}</td>
                                            <td>{request.currency}</td>
                                            <td>{request.action}</td>
                                            {/* <td>{contactObjects[id].status}</td> */}
                                            {/* <td>{contactObjects[id].address}</td> */}
                                            <td>{findUsers(request.client_id)}</td>
                                            <td>
                                                {/* <a className="btn text-primary" onClick = {()=>{setCurrentId(id)}}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a> */}
                                                <a className="btn text-danger" onClick={() => { onDelete(request.Id) }}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </a>
                                            </td>
                                            {/* {console.log(users[request.client_id -1 ].username)} */}
                                        </tr>
                                    }
                                )



                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default RequestList;