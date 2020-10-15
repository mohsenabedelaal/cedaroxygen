// Modules used for this project or page-----------------------------------------
import React, { useState, useEffect } from "react";
import RequestsForm from "../components/RequestsForm";
import firebase from "../firebase/firebase";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import axios from "axios";
import { useHistory } from "react-router";
import "../App.css";
//-------------------------------------------------------------------------------

// This is the Requests Component -----------------------------------------------------
const Requests = (props) => {
  // console.log(props.user);

  // These are the state for this component -------------------------------------------
  const history = useHistory();
  const [contactObjects, setContactObjects] = useState([]);
  const [currentId, setCurrentId] = useState();
  const [users, setUsers] = useState([]);
  const [yourRequests, setYourRequests] = useState([]);
  const firebaseDb = firebase.database().ref();
  //-------------------------------------------------------------------------------

  //UseEffect fetch all data from the api-----------------------------------------

  useEffect(() => {
    axios
      .get("/api/clients/listall")
      .then((res) => {
        // console.log("2na be 2wal useEffect");
        // console.log(res.data)
        setUsers(res.data);
        // console.log(users)
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    for (var i = 0; i < users.length; i++) {
      if (props.user == users[i].username) {
        // console.log("2na kamen jowa")
        console.log(users[i]);
        setCurrentId(users[i].Id);
        break;
      }
    }
  }, [users]);

  useEffect(() => {
    axios
      .get("/api/requests/listall")
      .then((res) => {
        setContactObjects(res.data);
      })
      .catch((error) => console.log(error));

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
  }, [currentId]);

  //-----------------------------------------------------------------------------------------------------------------------------------

  //add new request using api-------------------------------------------------------------------------------------------------------------------
  const addorEdit = (obj) => {
    axios
      .post(
        "/api/requests/add?client_id=" +
          currentId +
          "&amount=" +
          obj.amount +
          "&currency=" +
          obj.currency +
          "&action=" +
          obj.action
      )
      .then((res) => console.log(res.data))
      .then((done) => window.location.reload())
      .catch((error) => console.log("sorry", error));
  };

  //-----------------------------------------------------------------------------------------------------------------------------------

  //Find request for specfic user or clinet if not an admin-----------------------------------------------------------------------------

  const findUsers = (request) => {
    for (var i = 0; i < users.length; i++) {
      if (users[i].Id == request) {
        return users[i].username;
      }
    }
  };
  //------------------------------------------------------------------------------------------------------------------------------------

  //Delete specific request------------------------------------------------------------------------------------------------------------

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this request ? ")) {
      axios
        .post("/api/requests/delete?id=" + id)
        .then((res) => console.log(res.data))
        .then((done) => window.location.reload())
        .catch((err) => console(err));
    }
  };

  //------------------------------------------------------------------------------------------------------------------------------------

  // console.log(currentId);
  // console.log(users);
  console.log(props.user);
  //===================================================================================================================================
  return (
    <>
      <div className="">
        <div className="row">
          <h1 style={{ marginLeft:"25%",color:"white" }}>Submit A Request</h1>
        </div>

        <div className="rightBox3" style={{ height: "60vh" }}>
          <div>
            {props.user == "admin@admin.com" ? (
              <div></div>
            ) : (
              <RequestsForm
                user={props.user}
                addorEdit={addorEdit}
                currentId={currentId}
                setCurrentId={setCurrentId}
                contactObjects={contactObjects}
              />
            )}

            {/* {props.user == "admin@admin.com" && currentId &&
                <RequestsForm
                user = {props.user}
                addorEdit = {addorEdit}
                currentId = {currentId}
                setCurrentId = {setCurrentId}
                contactObjects = {contactObjects}
                 />
                    } */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Requests;
