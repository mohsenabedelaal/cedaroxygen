import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import NumberFormat from "react-number-format";
import ReactJsAlert from "reactjs-alert";
import "../componentscss/RequestForm.css";
//-------------------------------------------------------------------------------------------

const RequestsForm = (props) => {
  const initialFieldValues = {
    amount: "",
    currency: "",
    action: "",
    user: props.user,
    status: "Pending",
  };
  initialFieldValues.amount = props.converter.amount;
  // initialFieldValues.currency = props.converter.selected;
  // console.log("hon honnnnnnnnnnnnnnnnnnnnn",props.converter.selected)
  // props.converter.selected ? "" : initialFieldValues.currency = "Lira(LBP)";

  if (props.converter.selected == "US") {
    initialFieldValues.currency = "US Dollar ($)";
  }
  if (props.converter.selected == "LB") {
    initialFieldValues.currency = "Lebanese Pound (LBP)";
  }
  if (props.actions) {
    initialFieldValues.action = props.actions;
  }
  // initialFieldValues.currency = "US Dollar ($)"
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
    // alert(event.target.username.value);
    // return
    event.preventDefault();
    values.amount = values.amount.replace(/,/g, "");
    if (values.amount.length > 10) {
      alert("Reduce the amount ");
      return;
    }
    if (!values.amount || !values.currency || !values.action) {
      alert("Fill the submit form");
      return;
    }

    // alert(values.amount.length)
    // return
    // emailjs
    //   .sendForm(
    //     "service_3hmxaes",
    //     "template_dlxn602",
    //     event.target,
    //     "user_nOtz7jsUpNqSqqfoMjk9l"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

      emailjs
      .sendForm(
        "service_3hmxaes",
        "template_lu74ray",
        event.target,
        "user_nOtz7jsUpNqSqqfoMjk9l"
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
        <div className="container">
          <div className="row align-content-middle justify-content-center">
            <div className="col">
              <form
                autoComplete="off"
                className="offset-md-0.5  align-items-center"
                onSubmit={handleFormSubmit}
              >
                <div
                  className="col-auto align-content-middle justify-content-center"
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
                    <input
                      type="hidden"
                      name="username"
                      value={props.username}
                    />
                    <label id="tara">Amount</label>
                    {/* <input
                type="number"
                name="amount"
                onChange={handleInputChange}
                value={values.amount}
                className="form-control"
                id="inputCity"
                style={{ width: "90%" }}
              /> */}
                    <NumberFormat
                      required
                      class="form-control"
                      name="amount"
                      value={values.amount}
                      onChange={handleInputChange}
                      thousandSeparator={true}
                      style={{ width: "90%" }}
                      allowNegative={false}
                      readOnly={props.loading}
                    />
                  </div>
                  <div
                    className="form-group col-auto "
                    style={{ padding: "0%" }}
                  >
                    <label
                      id="tara"
                      htmlFor="inputCurrency"
                      style={{ padding: "0%" }}
                    >
                      Currency
                    </label>
                    <select
                      id="inputCurrency"
                      name="currency"
                      className="form-control"
                      onChange={handleInputChange}
                      value={values.currency}
                      readOnly={props.loading}
                      style={{ padding: "0%", width: "90%" }}
                    >
                      {/* <option defaultValue>Choose...</option>
           <option value="amount">amount</option> */}
                      <option value="...">Choose Currency</option>
                      <option value="US Dollar ($)">US Dollar ($)</option>
                      <option value="Lebanese Pound (LBP)">Lebanese Pound (LBP)</option>
                      {/* <option value="Euro (€)">Euro (€)</option> */}
                    </select>
                    {/* {error ? <div className="alert alert-danger" role="alert"> This is a primary alert—check it out!</div> : ""} */}
                    {/* {console.log()} */}
                  </div>
                  <div className="form-group">
                    <label id="tara" htmlFor="inputAction">
                      Action
                    </label>
                    <select
                      id="inputAction"
                      name="action"
                      className="form-control"
                      onChange={handleInputChange}
                      value={values.action}
                      readOnly={props.loading}
                      style={{ padding: "0%", width: "90%" }}
                    >
                      {/* <option defaultValue>Choose...</option>
           <option value="amount">amount</option> */}
                      <option value="..." defaultValue>
                        Choose Action
                      </option>
                      <option value="Sell">Sell</option>
                      <option value="Buy">Buy</option>
                    </select>
                    {props.user == "admin@admin.com" && props.currentId && (
                      <>
                        <label htmlFor="inputStatus" style={{ color: "black" }}>
                          Status
                        </label>
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
                  {!props.loading ? (
                    <button
                      type="submit"
                      className="btnAuth text-center"
                      style={{
                        width: "60%",
                        alignContent: "center",
                        textAlign: "center",
                        margin: "auto",
                        backgroundColor: "#005454",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "2rem",
                        border: "none",
                        marginTop: "5%",
                      }}
                    >
                      Confirm
                    </button>
                  ) : (
                    <div
                      class="spinner-border "
                      style={{ marginLeft: "25%", color: "#33c7bf" }}
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                  )}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestsForm;
