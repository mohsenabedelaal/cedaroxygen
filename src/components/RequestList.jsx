// Modules used for this project or page-----------------------------------------
import React, { useState, useEffect } from 'react';
import RequestsForm from '../components/RequestsForm';
import firebase from '../firebase/firebase';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import NumberFormat from "react-number-format";
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
    const [saving,setSaving] = useState(false)
    const [deleteing,setDeleting] = useState(false)



    //-------------------------------------------------------------------------------

    //UseEffect fetch all data from the api-----------------------------------------


    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/api/clients/listall").then(res => {
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

        axios.get("https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/api/requests/listall").then(res => {
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
        axios.post("https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/api/requests/add?client_id=" + currentId + "&amount=" + obj.amount + "&currency=" + obj.currency + "&action=" + obj.action)
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
        setDeleting(true)
        if (window.confirm('Are you sure to delete this request ? ')) {
            axios.post("https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/api/requests/delete?id=" + id)
                .then(res => console.log(res.data)).then(done => window.location.reload()).catch(err => console(err))
        }
    }


    const onSave = (id)=>{
        setSaving(true)
        let ele = document.getElementsByName(id);
        // alert("innnn",id)
            for( var i = 0; i < ele.length; i++) {
                if(ele[i].checked) {
                    // alert(ele[i].value)
                    axios.post("https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/api/requests/updatestatus?request_id="+id+"&status="+ele[i].value)
                .then(res => console.log(res.data)).then(done => window.location.reload()).catch(err => {setSaving(false)
                console.log(err)})
                }
                if (ele[i].value =="Reject"){
                    axios.post("https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/api/requests/updaterate?request_id="+id+"&rate="+0)
                .then(res => console.log(res.data)).then(done => window.location.reload()).catch(err => {setSaving(false)
                console.log(err)})

                }
            }

    }


    const onSet = (id) =>{
        setSaving(true)
        // alert(document.getElementById("rateset").value)
        let rate = document.getElementById("rateset").value
        // parseInt(value)
        rate = parseInt(rate.replace(/,/g, ""));
        axios.post("https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/api/requests/updaterate?request_id="+id+"&rate="+rate)
        .then(res => console.log(res.data)).then(done => window.location.reload()).catch(err => {setSaving(false)
        console.log(err)})

    }

    const onDeal = (id) =>{
        setSaving(true)
        let ele = document.getElementsByName(id);
        // alert("innnn",id)
            for( var i = 0; i < ele.length; i++) {
                if(ele[i].checked) {
                    // alert(ele[i].value)
                    axios.post("https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/api/requests/updateratestatus?request_id="+id+"&ratestatus="+ele[i].value)
                .then(res => console.log(res.data)).then(done => window.location.reload()).catch(err => {setSaving(false)
                console.log(err)})
                }

    }}

    const rateConfig = (request) =>{


        if(request.status == "Accept" && request.rate && !request.ratestatus){
            return(
                <>
                <label class="radio-inline" style={{ color:"black", marginRight:"4%" }}>
                <input type="radio" value="Accept" id={"first",request.Id} name={request.Id} />{" "}Accept
                </label>
                <label class="radio-inline" style={{ color:"black", marginRight:"4%" }}>
                <input type="radio" value="Reject" id={"second",request.Id} name={request.Id}/>{" "}Reject
                </label>
                <label class="radio-inline" >
                {saving ?
                <div class="spinner-grow text-success" role="status">
                <span class="sr-only">Loading...</span>
                </div> :
                <button className="btn btn-primary" onClick={()=>{onDeal(request.Id)}}>Save</button>}
                </label>
                </> )
        }
        else if (request.status == "Reject" && request.rate == 0 && !request.ratestatus){
            return(<>Canceled</>)
        }
        else if (request.ratestatus){
            return(request.ratestatus)
        }

    }

    const settingRate = (request)=> {

        if(request.status == "Accept" && !request.rate){
            return(
                <>
            <label class="radio-inline" style={{ color:"black", marginRight:"4%" }}>
            <NumberFormat
            id="rateset"
            required
            class="form-control"
            name="amount"
            // value={values.amount}
            // onChange={handleInputChange}
            thousandSeparator={true}
            // style={{ width: "90%" }}
            allowNegative={false}
            // readOnly={}
            />
            </label>
            <label class="radio-inline" >
            {saving ?
            <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
            </div> :
            <button className="btn btn-primary" onClick={()=>{onSet(request.Id)}}>Set</button>
            }

            </label>
            </>

            )
        }
        else if (request.status == "Reject"){
            return(request.rate)
        }else{
            return (request.rate)
        }


    }

    //------------------------------------------------------------------------------------------------------------------------------------




    // console.log(currentId);
    // console.log(users);
    // console.log(props.user)
    //===================================================================================================================================

    return (
        <>

            <div style={props.user == "admin@admin.com" ? {marginTop:"7%",marginLeft:"1%"}: {}}>

                <div className="row">
                    <table className="table table-borderless table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th>Amount </th>
                                <th>Currency </th>
                                <th>Action </th>
                                <th>Request Status</th>
                                <th>Rate</th>
                                <th>{props.user != "admin@admin.com" ? "Status" : "Client Response"}</th>
                                {props.user == "admin@admin.com" ? <th>User</th> : ""}
                                {/* <th>User</th> */}
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: "white" }}>
                            {
                                props.user != "admin@admin.com" ? contactObjects.filter(obj => obj.client_id == currentId).map(
                                    request => {
                                        // console.log("@na")
                                        return <tr key={request.Id} >
                                            <td>{parseFloat(request.amount).toLocaleString('en')}</td>
                                            <td>{request.currency}</td>
                                            <td>{request.action}</td>
                                            <td>{request.status}</td>
                                            <td>{request.rate ? parseFloat(request.rate).toLocaleString('en') : "Unset"}</td>
                                            {/* <td>{request.ratestatus ? request.ratestatus : "Pending"}</td> */}
                                            <td>{rateConfig(request)}</td>
                                            <td>
                                                {/* <a className="btn text-primary" onClick = {()=>{setCurrentId(id)}}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a> */}
                                               {deleteing ?
                                               <div class="spinner-grow text-danger" role="status">
                                                <span class="sr-only">Loading...</span>
                                                </div> : <a className="btn text-danger" onClick={() => { onDelete(request.Id) }}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </a> }
                                            </td>
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
                                            <td>{parseFloat(request.amount).toLocaleString('en')}</td>
                                            <td>{request.currency}</td>
                                            <td>{request.action}</td>
                                            {/* <td>{request.status}</td> */}
                                            <td>{request.status != "Reject" && request.status != "Accept" ?
                                            <>
                                            <label class="radio-inline" style={{ color:"black", marginRight:"4%" }}>
                                            <input type="radio" value="Accept" id={"first",request.Id} name={request.Id} />{" "}Accept
                                            </label>
                                            <label class="radio-inline" style={{ color:"black", marginRight:"4%" }}>
                                            <input type="radio" value="Reject" id={"second",request.Id} name={request.Id}/>{" "}Reject
                                            </label>
                                            <label class="radio-inline" >
                                            {saving ?
                                            <div class="spinner-grow text-success" role="status">
                                            <span class="sr-only">Loading...</span>
                                            </div> :
                                            <button className="btn btn-primary" onClick={()=>{onSave(request.Id)}}>Save</button>
                                            }

                                            </label>
                                            </> : request.status
                                            }</td>
                                            <td>{settingRate(request)}</td>
                                            <td>{request.ratestatus ? request.ratestatus : "Pending" }</td>
                                            {/* <td>{contactObjects[id].address}</td> */}
                                            <td>{findUsers(request.client_id)}</td>
                                            <td>
                                                {/* <a className="btn text-primary" onClick = {()=>{setCurrentId(id)}}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a> */}
                                                {deleteing ?
                                               <div class="spinner-grow text-danger" role="status">
                                                <span class="sr-only">Loading...</span>
                                                </div> : <a className="btn text-danger" onClick={() => { onDelete(request.Id) }}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </a> }
                                            </td>
                                            {/* {console.log(users[request.client_id -1 ].username)} */}
                                        </tr>
                                    }
                                )



                            }
                        </tbody>
                        {contactObjects.length == 0 ?
                        <div class="spinner-border text-success" style={{ width:"3rem" , height:"3rem", marginLeft:"350%" }} role="status">
                            <span class="sr-only">Loading...</span>
                        </div> : <></>}
                    </table>
                </div>
            </div>
        </>
    )}
export default RequestList;