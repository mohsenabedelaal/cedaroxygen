import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import NumberFormat from "react-number-format";

const UpdateRates = () => {
  const [rates, setRates] = useState("");
  const [rates2, setOffRates] = useState("");
  const [ratesbm, setBlackBRates] = useState("");
  const [ratesbms, setBlackSRates] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://fx-p2p-platform.herokuapp.com/rates/listall"
      )
      .then((res) => {
        // console.log(res.data);
        setRates(res.data[res.data.length - 1].platform_rate);
        setOffRates(res.data[res.data.length - 1].bdl_rate);
        setBlackBRates(res.data[res.data.length - 1].black_market_rate);
        setBlackSRates(res.data[res.data.length - 1].black_market_rate_sell);
      })
      .catch((err) => console.log(err));
  }, []);

  function ChangeRates() {
    var bdl = document.getElementById("bdl").value;
    var sayrafa = document.getElementById("sayrafa").value;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    var setCurrentDate =
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec;
    axios
      .get(
        "http://fx-p2p-platform.herokuapp.com/rates/add?bdl_rate=" +
          bdl +
          "&platform_rate=" +
          sayrafa +
          "&black_market_rate=" +
          ratesbm +
          "&black_market_rate_sell=" +
          ratesbms +
          "&update_time=" +
          setCurrentDate
      )
      .then((response) => console.log(response));
  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" style={{ padding: "5%" }}>
          <form>
            <p className="h4 text-center mb-4">Update Rates</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Sayrafa Dollar Rate
            </label>
            <NumberFormat
              type="text"
              id="sayrafa"
              className="form-control"
              value={rates}
            />
            <br />

            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Official Dollar Rate
            </label>
            <NumberFormat
              type="text"
              id="bdl"
              className="form-control"
              value={rates2}
            />
            <br />

            <div className="text-center mt-4">
              <MDBBtn
                type="submit"
                style={{ backgroundColor: "#33c7bf" }}
                onClick={ChangeRates}
              >
                Update
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default UpdateRates;
