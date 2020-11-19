import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const UpdateRates = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" style={{ padding: "5%" }}>
          <form>
            <p className="h4 text-center mb-4">Update Rates</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Sayrafa Dollar Rate
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Prevailing Market Rate
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Official Dollar Rate
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
            />
            <br />

            <div className="text-center mt-4">
              <MDBBtn type="submit" style={{ backgroundColor: "#33c7bf" }}>
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
