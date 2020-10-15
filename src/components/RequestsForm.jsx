import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
//-------------------------------------------------------------------------------------------

const RequestsForm = (props) => {
  const initialFieldValues = {
    amount: "",
    currency: "",
    action: "",
    user: props.user,
    status: "Pending",
  };
  // console.log(props)
  // console.log(initialFieldValues.user);
  const [values, setValues] = useState(initialFieldValues);

  // useEffect(() => {
  //     if (props.currentId === '') {
  //         setValues({
  //             ...initialFieldValues
  //         })
  //     } else {
  //         setValues({
  //             ...props.contactObjects[props.currentId]
  //         })
  //     }
  // }, [props.currentId, props.contactObjects]
  // )

  //Form input change-----------------------------------------------------------------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  //---------------------------------------------------------------------------------------------

  //Submit form---------------------------------------------------------------------------------

  const handleFormSubmit = (event) => {
    // notificationOnClick();
    // console.log(values)
    event.preventDefault();
    emailjs
      .sendForm(
        "service_nmjie39",
        "template_k5aqzsi",
        event.target,
        "user_zxvsZyEmkbWFzo9eqYu2G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    props.addorEdit(values);
    // notificationOnClick();
  };

  //---------------------------------------------------------------------------------------------------

  // console.log("2na bel form",props.user)

  //===============================================================================================================
  return (
    <>
      <div>
        <form
          autoComplete="off"
          className="offset-md-0.5  align-items-center"
          onSubmit={handleFormSubmit}
        >
          <div
            className="col-auto"
            style={{
              padding: "0%",
              color: "black",
              fontSize: "14.43px",
              fontFamily: "arial",
              paddingLeft: "5%",
              // height:"60%"
            }}
          >
            <div
              className="form-group "
              style={{ padding: "0%", paddingTop: "5%" }}
            >
              <input type="hidden" name="user" value={props.user} />
              <label htmlFor="inputCity">Amount</label>
              <input
                type="number"
                name="amount"
                onChange={handleInputChange}
                value={values.amount}
                className="form-control"
                id="inputCity"
                style={{ width: "90%" }}
              />
            </div>
            <div className="form-group col-auto" style={{ padding: "0%" }}>
              <label htmlFor="inputCurrency" style={{ padding: "0%" }}>
                Currency
              </label>
              <select
                id="inputCurrency"
                name="currency"
                className="form-control"
                onChange={handleInputChange}
                value={values.currency}
                style={{ padding: "0%", width: "90%" }}
              >
                {/* <option defaultValue>Choose...</option>
           <option value="amount">amount</option> */}
                <option value="..." defaultValue>
                  Choose Currency
                </option>
                <option value="Dollor($)">US Dollor ($)</option>
                <option value="Lira(LBP)">Lebanse Pound (LBP)</option>
                <option value="Euro (€)">Euro (€)</option>
              </select>
              {/* {error ? <div className="alert alert-danger" role="alert"> This is a primary alert—check it out!</div> : ""} */}
              {/* {console.log()} */}
            </div>
            <div className="form-group">
              <label htmlFor="inputAction">Action</label>
              <select
                id="inputAction"
                name="action"
                className="form-control"
                onChange={handleInputChange}
                value={values.action}
                style={{ padding: "0%", width: "90%" }}
              >
                {/* <option defaultValue>Choose...</option>
           <option value="amount">amount</option> */}
                <option value="..." defaultValue>
                  Choose Action
                </option>
                <option value="sell">Sell</option>
                <option value="buy">Buy</option>
              </select>
              {props.user == "admin@admin.com" && props.currentId && (
                <>
                  <label htmlFor="inputStatus">Status</label>
                  <select
                    id="inputAction"
                    name="status"
                    className="form-control"
                    onChange={handleInputChange}
                    value={values.status}
                  >
                    {/* <option defaultValue>Choose...</option>
           <option value="amount">amount</option> */}
                    <option value="..." defaultValue>
                      Choose Status
                    </option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>{" "}
                </>
              )}
              {/* {error ? <div className="alert alert-danger" role="alert"> This is a primary alert—check it out!</div> : ""} */}
              {/* {console.log()} */}
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                width: "30%",
                alignContent: "center",
                margin: "auto",
                backgroundColor: "#005454",
                color:"white",
                fontWeight:"bold"
              }}>Submit</button>
          </div>
        </form>
        {/* <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-group input-group col-9">
                    <div className="input-group-prepend">
                        <div className="input-group-text"  id="inputGroup-sizing-sm">
                            @
                        </div>
                    </div>
                    <input
                        className="form-control col-7"
                        placeholder="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                        required />
                </div>
                <div className="form-row">
                    <div className="form-group input-group col-7">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                            required />
                    </div>
                    <div className="form-group input-group col-7">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <input
                            className="form-control"
                            type="money"
                            placeholder="Money"
                            name="money"
                            value={values.money}
                            onChange={handleInputChange}
                            required />
                    </div>

                </div>
                <div className="form-group input-group col-7">
                    <textarea
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                        required />
                </div>
                <div className="form-group">
                    <input type="submit" value={props.currentId === '' ? 'Save' : 'Update'} className="btn btn-primary btn-block col-7" />
                </div>

            </form> */}
      </div>

      {/* <button onClick={notificationOnClick}>click test</button> */}
    </>
  );
};

export default RequestsForm;
