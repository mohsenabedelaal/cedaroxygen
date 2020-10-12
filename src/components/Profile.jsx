import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from '../firebase/firebase';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from "react-router-dom";

const Profile = (props) => {

  const initialFieldValues = {
    firstName: '',
    lastName: '',
    mobile: '',
    city: '',
    state: '',
    zip: '',
    readonly: '',
    user: props.user,
    id: 0,
  };


  const [values, setValues] = useState(initialFieldValues);
  const [users, setUsers] = useState([]);
  const [changed, setChanged] = useState(false)


  useEffect(() => {
    axios.get("/api/clients/listall")
      .then(res => {

        console.log(res.data);
        setUsers(res.data)
      }
        //
      ).catch(err => console.log(err))
  }, []);

  useEffect(() => {
    getdataofuser(users);
  }, [users]);

  const getdataofuser = users => {

    // console.log('enter', users.length);

    for (var i = 0; i < users.length; i++) {



      if (users[i]['username'] && users[i].username == props.user) {
        setValues({
          firstName: users[i]['name'],
          lastName: users[i]['last name'],
          mobile: users[i]['phone'],
          city: users[i]['address'],
          readonly: true,
          id: users[i]['Id']
        })

        console.log('ok');
        // console.log(values.id)
        return
      }

    }
  }

  const handleInputChange = e => {

    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
    // console.log(values.firstName)

  };
  // console.log(window.location.href)

  const handleFormSubmit = event => {

    if (!values.firstName || !values.lastName || !values.city || !values.mobile || !values.state || !values.zip) {
      event.preventDefault();
      alert("Please Fill up the Form")
      return;
    }
    // notificationOnClick();

    // addorEdit(values);
    // notificationOnClick();
    setChanged(!changed);
    event.preventDefault();
    axios.post("/api/clients/add?name=" + values.firstName + "&last_name=" + values.lastName + "&phone=" + values.mobile + "&address=" + values.city + values.state + values.zip + "&username=" + props.user + "&password=noc123456")
      .then(ress => {
        if (ress.data) {
          console.log("Done");
          window.location.reload()
        } else {
          console.log('Not Done')
        }
      }
      )
    // window.location.reload()

  }






  const onUpdate = (values) => {
    // console.log(values.id);
    axios.post("/api/clients/delete?id=" + values.id)
      .then(ress => {
        console.log(ress.data)
        return ress.data
      }).then(ressdata => {
        window.location.reload()
      }).catch((error) => { console.log(error) })
    // window.location.reload();
  }


  // console.log(users)


  return (

    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 align-self-center">Profile</h1>
        </div>
      </div>
      <form className="needs-validation offset-md-1" noValidate onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip01">First name</label>

            <input type="text" className="form-control" id="validationTooltip01" onChange={handleInputChange} name="firstName" placeholder="First name" value={values.firstName} readOnly={values.readonly} required />
            <div className="valid-tooltip">
              Looks good!
      </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">Last name</label>
            <input type="text" className="form-control" id="validationTooltip02" onChange={handleInputChange} name="lastName" placeholder="Last name" value={values.lastName} readOnly={values.readonly} required />
            <div className="valid-tooltip">
              Looks good!
      </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltipUsername">Mobile</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="validationTooltipUsernamePrepend"><i className="fas fa-mobile-alt"></i></span>
              </div>
              <input type="email" className="form-control col-md-8" name="mobile" onChange={handleInputChange} id="validationTooltipUsername" value={values.mobile} placeholder="Phone Number" aria-describedby="validationTooltipUsernamePrepend" readOnly={values.readonly} required />
              <div className="invalid-tooltip">
                Please choose a unique and valid phone number.
        </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">City</label>
            <textarea type="text" className="form-control" id="validationTooltip03" value={values.city} onChange={handleInputChange} name="city" placeholder="City" readOnly={values.readonly} required />
            <div className="invalid-tooltip">
              Please provide a valid city.
      </div>
          </div>
          {/* <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip04">State</label>
            <input type="text" className="form-control" id="validationTooltip04" value={values.state} onChange={handleInputChange} name="state" placeholder="State" readOnly={values.readonly} required />
            <div className="invalid-tooltip">
              Please provide a valid state.
      </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Zip</label>
            <input type="number" className="form-control col-md-8" name="zip" onChange={handleInputChange} value={values.zip} id="validationTooltip05" placeholder="Zip" readOnly={values.readonly} required />
            <div className="invalid-tooltip">
              Please provide a valid zip.
      </div>
          </div> */}
        </div>
        {values.readonly ? <div></div> :
          <button className="btn btn-primary" type="submit">Submit form</button>
        }
      </form>
      {/* {console.log("2na ", values.id)} */}
      {/* {values.readonly ? <button className="btn btn-primary  offset-md-1" onClick={() => onUpdate(values)} >Update</button> : <></>} */}
    </div>
  )
}

export default Profile
