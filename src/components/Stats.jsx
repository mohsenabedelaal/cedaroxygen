// Modules used for this project or page-----------------------------------------
import React, { useState, useEffect } from "react";
import RequestsForm from "./RequestsForm";
import firebase from "../firebase/firebase";
import emailjs from "emailjs-com";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import NumberFormat from "react-number-format";
import axios from "axios";
import { useHistory } from "react-router";
import ChartsPage from "./ChartsPage.jsx";
import ChartsPage2 from "./ChartsPage2.jsx";
import ChartsPage3 from "./ChartsPage3.jsx";
import "../componentscss/Stats.css";
// import ChartsPage from "ChartsPage.jsx";
//-------------------------------------------------------------------------------

// This is the Requests Component -----------------------------------------------------
const Stats = (props) => {
  // console.log(props.user);

  var state = {
    supply1: 0,
    supply2: 0,
    supply3: 0,
    total: 0,
  };

  //this.handleTotalChange = this.handleTotalChange.bind(this);

  // These are the state for this component -------------------------------------------
  const history = useHistory();
  const [contactObjects, setContactObjects] = useState([]);
  const [currentId, setCurrentId] = useState();
  const [users, setUsers] = useState([]);
  const [saving, setSaving] = useState(false);
  const [deleteing, setDeleting] = useState(false);
  const [platformSupply, setSupply] = useState([]);
  const [platformDemand, setDemand] = useState([]);
  const [capRate, setCap] = useState([]);
  const [sayrafaRate, setSayrafa] = useState([]);

  //-------------------------------------------------------------------------------

  //UseEffect fetch all data from the api-----------------------------------------

  useEffect(() => {
    axios
      .get("http://fx-p2p-platform.herokuapp.com/api/clients/listall")
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
      .get("http://fx-p2p-platform.herokuapp.com/api/requests/listall")
      .then((res) => {
        setContactObjects(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://fx-p2p-platform.herokuapp.com/api/requests/supply")
      .then((res) => {
        setSupply(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://fx-p2p-platform.herokuapp.com/api/requests/demand")
      .then((res) => {
        setDemand(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://fx-p2p-platform.herokuapp.com/rates/listall")
      .then((res) => {
        setCap(res.data[0]["black_market_rate"]);
        setSayrafa(res.data[0]["bdl_rate"]);
      })
      .catch((error) => console.log(error));
  }, []);

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

  //-----------------------------------------------------------------------------------------------------------------------------------

  //add new request using api-------------------------------------------------------------------------------------------------------------------
  const addorEdit = (obj) => {
    axios
      .post(
        "http://fx-p2p-platform.herokuapp.com/api/requests/add?client_id=" +
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

  const findusername = (request) => {
    for (var i = 0; i < users.length; i++) {
      if (users[i].Id == request) {
        return users[i].name;
      }
    }
  };
  const findrate = (request) => {
    for (var i = 0; i < users.length; i++) {
      if (users[i].Id == request) {
        return users[i].rate;
      }
    }
  };
  //------------------------------------------------------------------------------------------------------------------------------------

  //Delete specific request------------------------------------------------------------------------------------------------------------

  const onDelete = (id) => {
    setDeleting("fordelete" + id);
    // document.getElementById("fordelete")
    // document.getElementById("fordelete",id).value = true
    if (window.confirm("Are you sure to delete this request ? ")) {
      axios
        .post(
          "http://fx-p2p-platform.herokuapp.com/api/requests/delete?id=" + id
        )
        .then((res) => console.log(res.data))
        .then((done) => window.location.reload())
        .catch((err) => console(err));
    }
  };

  const onSave = (request) => {
    let id = request.Id;
    setSaving("forrequeststatus" + id);
    let ele = document.getElementsByName(id);
    // alert("innnn",id)
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        // alert(ele[i].value)
        axios
          .post(
            "http://fx-p2p-platform.herokuapp.com/api/requests/updatestatus?request_id=" +
              id +
              "&status=" +
              ele[i].value
          )
          .then((res) => console.log(res.data))
          .catch((err) => {
            setSaving(false);
            console.log(err);
          });
      }
      if (ele[i].value == "Rejected") {
        var email = findUsers(request.client_id);
        var nameuser = findusername(request.client_id);

        if (email && nameuser) {
          var templated = {
            adminstatus: "Rejected",
            username: nameuser,
            user: email,
            amount: request.amount,
            action: request.action,
            currency: request.currency,
            message: "Unfortunately,",
            rate: "",
          };

          emailjs
            .send(
              "service_3hmxaes",
              "template_dlxn602",
              templated,
              "user_nOtz7jsUpNqSqqfoMjk9l"
            )
            .then(
              (result) => {
                console.log(result.text);
                return result.text;
              },
              (error) => {
                console.log(error.text);
              }
            )
            .then((done) => {
              if (done == "OK") {
                window.location.reload();
              }
            });
        }

        axios
          .post(
            "http://fx-p2p-platform.herokuapp.com/api/requests/updaterate?request_id=" +
              id +
              "&rate=" +
              0
          )
          .then((res) => console.log(res.data))
          .then((done) => window.location.reload())
          .catch((err) => {
            setSaving(false);
            console.log(err);
          });
      }
    }
  };

  const onSet = (request) => {
    var id = request.Id;
    setSaving("forsetrate" + id);
    // alert(document.getElementById("rateset").value)
    let rate = document.getElementById("rateset").value;
    // parseInt(value)
    rate = parseInt(rate.replace(/,/g, ""));
    axios
      .post(
        "http://fx-p2p-platform.herokuapp.com/api/requests/updaterate?request_id=" +
          id +
          "&rate=" +
          rate
      )
      .then((res) => console.log(res.data))
      .catch((err) => {
        setSaving(false);
        console.log(err);
      });
    var email = findUsers(request.client_id);
    var nameuser = findusername(request.client_id);
    var setrate = document.getElementById("rateset").value;
    console.log(email);
    console.log(nameuser);
    console.log(setrate);
    if (email && nameuser && setrate) {
      var templated2 = {
        adminstatus: "Accepted",
        username: nameuser,
        user: email,
        amount: request.amount,
        action: request.action,
        currency: request.currency,
        message: "",
        rate: " on a " + setrate + " per USD",
      };

      emailjs
        .send(
          "service_3hmxaes",
          "template_dlxn602",
          templated2,
          "user_nOtz7jsUpNqSqqfoMjk9l"
        )
        .then(
          (result) => {
            console.log(result.text);
            return result.text;
          },
          (error) => {
            console.log(error.text);
          }
        )
        .then((res) => {
          if (res == "OK") {
            window.location.reload();
          }
        });
    }
  };

  const onDeal = (id) => {
    setSaving("fordeal" + id);
    let ele = document.getElementsByName(id);
    // alert("innnn",id)
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        // alert(ele[i].value)
        axios
          .post(
            "http://fx-p2p-platform.herokuapp.com/api/requests/updateratestatus?request_id=" +
              id +
              "&ratestatus=" +
              ele[i].value
          )
          .then((res) => console.log(res.data))
          .then((done) => window.location.reload())
          .catch((err) => {
            setSaving(false);
            console.log(err);
          });
      }
    }
  };

  const rateConfig = (request) => {
    if (request.status == "Accepted" && request.rate && !request.ratestatus) {
      return (
        <>
          <label
            class="radio-inline radiocolor"
            style={{ color: "black ", marginRight: "4%" }}
          >
            <input
              type="radio"
              value="Accepted"
              id={("first", request.Id)}
              name={request.Id}
            />{" "}
            Accept
          </label>
          <label
            class="radio-inline radiocolor"
            style={{ color: "black", marginRight: "4%" }}
          >
            <input
              type="radio"
              value="Rejected"
              id={("second", request.Id)}
              name={request.Id}
            />{" "}
            Reject
          </label>
          <label class="radio-inline">
            {saving == "fordeal" + request.Id ? (
              <div
                class="spinner-grow"
                role="status"
                style={{ color: "#33c7bf" }}
              >
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#005454", border: "none" }}
                onClick={() => {
                  onDeal(request.Id);
                }}
              >
                Save
              </button>
            )}
          </label>
        </>
      );
    } else if (
      request.status == "Rejected" &&
      request.rate == 0 &&
      !request.ratestatus
    ) {
      return <>Cancled</>;
    } else if (request.ratestatus) {
      return request.ratestatus;
    } else if (!request.ratestatus) {
      return "Pending";
    }
  };

  const settingRate = (request) => {
    if (request.status == "Accepted" && !request.rate) {
      return (
        <>
          <label
            class="radio-inline"
            style={{ color: "black", marginRight: "4%" }}
          >
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
          <label class="radio-inline">
            {saving == "forsetrate" + request.Id ? (
              <div
                class="spinner-grow "
                role="status"
                style={{ color: "#33c7bf" }}
              >
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "rgb(0, 84, 84)" }}
                onClick={() => {
                  onSet(request);
                }}
              >
                Set
              </button>
            )}
          </label>
        </>
      );
    } else if (request.status == "Rejected") {
      return "Cancled";
    } else if (request.status != "Accepted" && request.status != "Rejected") {
      return "Pending";
    } else {
      return request.currency == "US Dollar ($)"
        ? parseFloat(request.rate).toLocaleString("en") + " per USD"
        : parseFloat(request.rate).toLocaleString("en") + " per USD";
    }
  };

  const forDelete = (request) => {
    // {deleteing ?
    //      : <a className="btn text-danger" onClick={() => { onDelete(request.Id) }}>
    //          <i className="fas fa-trash-alt"></i>
    //      </a> }

    if (deleteing == "fordelete" + request.Id) {
      return (
        <div class="spinner-grow text-danger" role="status">
          // <span class="sr-only">Loading...</span>
          //{" "}
        </div>
      );
    } else if (request.status == "Rejected" || request.ratestatus) {
      return "Done";
    } else {
      return (
        <a
          className="btn text-danger"
          onClick={() => {
            onDelete(request.Id);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </a>
      );
    }
  };

  const dynamicsort = (property, order) => {
    var sort_order = 1;
    if (order === "desc") {
      sort_order = -1;
    }
    return function (a, b) {
      // a should come before b in the sorted order
      if (a[property] < b[property]) {
        return -1 * sort_order;
        // a should come after b in the sorted order
      } else if (a[property] > b[property]) {
        return 1 * sort_order;
        // a and b are the same
      } else {
        return 0 * sort_order;
      }
    };
  };

  const enterSupply2 = (e) => {
    document.getElementById("total-supply").value = parseFloat(
      e.target.value
        ? parseInt(
            document.getElementById("diaspora-supply").value.replace(/,/g, "")
          ) +
            platformSupply +
            parseInt(
              document.getElementById("fund-supply").value.replace(/,/g, "")
            )
        : 0
    )
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const enterDemand2 = (e) => {
    document.getElementById("total-demand").value = parseFloat(
      e.target.value
        ? parseInt(
            document.getElementById("diaspora-demand").value.replace(/,/g, "")
          ) +
            platformDemand +
            parseInt(
              document.getElementById("fund-demand").value.replace(/,/g, "")
            )
        : 0
    )
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const calculateRate = (e) => {
    var totalDemand = parseFloat(
      parseInt(
        document.getElementById("diaspora-demand").value.replace(/,/g, "")
      ) *
        document.getElementById("demand-weight3").value +
        platformDemand * document.getElementById("demand-weight2").value +
        parseInt(
          document.getElementById("fund-demand").value.replace(/,/g, "")
        ) *
          document.getElementById("demand-weight1").value
    );

    var totalSupply = parseFloat(
      parseInt(
        document.getElementById("diaspora-supply").value.replace(/,/g, "")
      ) *
        document.getElementById("supply-weight3").value +
        platformSupply * document.getElementById("supply-weight2").value +
        parseInt(
          document.getElementById("fund-supply").value.replace(/,/g, "")
        ) *
          document.getElementById("supply-weight1").value
    );

    var discount = 0;
    var platRate = 0;
    if (totalDemand <= 2 * totalSupply) {
      if (totalDemand > 1.5 * totalSupply) {
        discount = 10;
        platRate = capRate * 0.9;
      } else if (totalDemand > 1.25 * totalSupply) {
        discount = 25;
        platRate = capRate * 0.75;
      } else if (totalDemand > totalSupply) {
        discount = 50;
        platRate = capRate * 0.5;
      } else {
        platRate = sayrafaRate;
        discount = -1;
      }
    } else {
      platRate = capRate;
    }
    console.log(capRate, platRate);
    document.getElementById("discount").value = discount;
    document.getElementById("platform-rate").value = platRate;
  };
  //------------------------------------------------------------------------------------------------------------------------------------

  // console.log(currentId);
  // console.log(users);
  // console.log(props.user)
  //===================================================================================================================================

  return (
    <>
      <div className="container-fluid justify-content-center align-content-middle text-center ">
        <div className="row align-content-middle text-center bg-stats">
          <div className="container " style={{ marginTop: "100px" }}>
            <div className="row align-content-middle text-center">
              <div className="col-md-6 justify-content-center">
                <div className="card">
                  <h3 className="card-header text-center text-dark py-4">
                    Supply
                  </h3>
                  <div className="card-body">
                    <div
                      id="table"
                      className="table-editable"
                      style={{ width: "100%" }}
                    >
                      <table class="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                          <tr>
                            <th class="text-center">Product</th>
                            <th class="text-center">Total Supply</th>
                            <th class="text-center">Weight</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="pt-3-half" contenteditable="true">
                              Impact Trade Finance Fund
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">$</span>
                                </div>
                                <NumberFormat
                                  type="text"
                                  id="fund-supply"
                                  class="form-control"
                                  value={0}
                                  thousandSeparator={true}
                                  aria-label="Dollar amount (with dot and two decimal places)"
                                  thousandSeparator={true}
                                  onChange={enterSupply2}
                                />
                              </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <NumberFormat
                                id="supply-weight1"
                                type="text"
                                aria-label="First name"
                                onChange={calculateRate}
                                class="form-control"
                                value={1}
                              />
                            </td>
                          </tr>

                          <tr>
                            <td class="pt-3-half" contenteditable="true">
                              P2P FX Marketplace
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">$</span>
                                </div>
                                <input
                                  id="platform-supply"
                                  readOnly
                                  value={platformSupply}
                                  type="text"
                                  class="form-control"
                                />
                              </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <NumberFormat
                                id="supply-weight2"
                                type="text"
                                onChange={calculateRate}
                                aria-label="First name"
                                class="form-control"
                                value={1}
                              />
                            </td>
                          </tr>

                          <tr>
                            <td class="pt-3-half" contenteditable="true">
                              Lebanese Diaspora
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">$</span>
                                </div>
                                <NumberFormat
                                  id="diaspora-supply"
                                  type="text"
                                  class="form-control"
                                  value={0}
                                  aria-label="Dollar amount (with dot and two decimal places)"
                                  thousandSeparator={true}
                                  onChange={enterSupply2}
                                />
                              </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <NumberFormat
                                id="supply-weight3"
                                type="text"
                                onChange={calculateRate}
                                aria-label="First name"
                                class="form-control"
                                value={1}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 justify-content-center">
                <div className="card">
                  <h3 className="card-header text-center  text-dark py-4">
                    Demand
                  </h3>
                  <div className="card-body">
                    <div
                      id="table"
                      className="table-editable"
                      style={{ width: "100%" }}
                    >
                      <table class="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                          <tr>
                            <th class="text-center">Product</th>
                            <th class="text-center">Total Demand</th>
                            <th class="text-center">Weight</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="pt-3-half" contenteditable="true">
                              Impact Trade Finance Fund
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">$</span>
                                </div>
                                <NumberFormat
                                  id="fund-demand"
                                  onChange={enterDemand2}
                                  value={0}
                                  type="text"
                                  class="form-control"
                                  aria-label="Dollar amount (with dot and two decimal places)"
                                />
                              </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <NumberFormat
                                value={1}
                                onChange={calculateRate}
                                id="demand-weight1"
                                type="text"
                                aria-label="First name"
                                class="form-control"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td class="pt-3-half" contenteditable="true">
                              P2P FX Marketplace
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">$</span>
                                </div>
                                <input
                                  id="platform-demand"
                                  readOnly
                                  value={platformDemand}
                                  type="text"
                                  class="form-control"
                                />
                              </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <NumberFormat
                                value={1}
                                onChange={calculateRate}
                                id="demand-weight2"
                                type="text"
                                aria-label="First name"
                                class="form-control"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td class="pt-3-half" contenteditable="true">
                              Lebanese Diaspora
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">$</span>
                                </div>
                                <NumberFormat
                                  onChange={enterDemand2}
                                  value={0}
                                  id="diaspora-demand"
                                  type="text"
                                  class="form-control"
                                  aria-label="Dollar amount (with dot and two decimal places)"
                                />
                              </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <NumberFormat
                                id="demand-weight3"
                                onChange={calculateRate}
                                value={1}
                                type="text"
                                aria-label="First name"
                                class="form-control"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-12 justify-content-center"
                style={{ marginTop: "20px" }}
              >
                <div className="card">
                  <h3 className="card-header text-center  text-dark py-4">
                    Platform Rates
                  </h3>
                  <div className="card-body">
                    <div
                      id="table"
                      className="table-editable"
                      style={{ width: "100%" }}
                    >
                      <table class="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                          <tr>
                            <th class="text-center">Total Supply</th>
                            <th class="text-center">Total Demand</th>
                            <th class="text-center">Demand to Supply Ratio</th>
                            <th class="text-center">Discount</th>
                            <th class="text-center">Platform Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="pt-3-half" contenteditable="true">
                              <div class="input-group mb-3">
                                <input
                                  id="total-supply"
                                  readOnly
                                  value={platformSupply}
                                  type="text"
                                  class="form-control"
                                  aria-label="Dollar amount (with dot and two decimal places)"
                                />
                              </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <div class="input-group mb-3">
                                <input
                                  id="total-demand"
                                  readOnly
                                  value={platformDemand}
                                  type="text"
                                  class="form-control"
                                  aria-label="Dollar amount (with dot and two decimal places)"
                                />
                              </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <input
                                type="text"
                                aria-label="First name"
                                class="form-control"
                              />
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <input
                                id="discount"
                                readOnly
                                value={0}
                                type="text"
                                aria-label="First name"
                                class="form-control"
                              />
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                              <input
                                id="platform-rate"
                                type="text"
                                aria-label="First name"
                                class="form-control"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-12"
                style={{ padding: "0px", margin: "0%", paddingBottom: "5%" }}
              >
                <ChartsPage />
              </div>

              <div
                className="col-md-12"
                style={{ padding: "0px", margin: "0%", paddingBottom: "5%" }}
              >
                <ChartsPage2 />
              </div>

              <div
                className="col-md-12"
                style={{ padding: "0px", margin: "0%", paddingBottom: "5%" }}
              >
                <ChartsPage3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
