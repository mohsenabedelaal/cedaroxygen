import React from "react";

export default function Footering() {
  return (
    <div>
      <footer
        className="page-footer font-small blue-grey lighten-5"
        style={{
          color: "white",
          border: "0px solid transparentt",
          height: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#005454",
            border: "2px solid transparent",
            height: "20vh",
          }}
        >
          <div
            className="container"
            style={{
              border: "2px solid transparent",
              height: "100%",
            }}
          >
            <div
              className="row py-4 d-flex align-self-center"
              style={{
                border: "2px solid transparent",
                marginTop: "1%",
              }}
            >
              <div
                className="col-md-8 col-lg-8 text-center text-md-left"
                style={{ border: "2px solid transparent", width: "100vw" }}
              >
                <h5 className="mb-0">
                  Get involved in investing and supporting Lebanese
                  manufacturers
                </h5>
              </div>

              <div className="col-md-4 col-lg-4 text-center text-md-right"></div>
            </div>
          </div>
        </div>

        <div
          className="container text-center text-md-left mt-5 dark-grey-text"
          style={{
            // border: "2px solid red",
            color: "grayText",
            marginBottom: "5%",
          }}
        >
          <div className="row mt-3 dark-grey-text justify-content-end align-self-end">
            <div className="col-md-3 col-lg-5 col-xl-3 mb-4 dark-grey-text">
              <img
                src="https://cedaroxygen.com/wp-content/uploads/2020/06/Cedar-Oxygen_Logo-green.png"
                className="navbar-brand ml-2"
                width="200"
                height="50"
                alt="icon"
              />
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a className="dark-grey-text" href="#!">
                  Home
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  About Us
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Our Story
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  The Team
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Our Partners
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-4">
              <p>
                <i></i> The Fund
              </p>
              <p>
                <i></i> Our Investment Approach
              </p>
              <p>
                <i></i> Impact Investing and ESG
              </p>
              <p>
                <i></i> Borrowers
              </p>
              <p>
                <i></i> Contact Us
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <i></i> Connect with us!
              </p>
              <a className="fb-ic">
                <i className="fab fa-facebook-f white-text mr-4"> </i>
              </a>

              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-4"> </i>
              </a>

              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-4"> </i>
              </a>

              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-4"> </i>
              </a>

              <a className="ins-ic">
                <i className="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright col-md-5 text-center text-black-50 py-3">
          © 2020 Copyright:
          <a className="dark-grey-text" href="https://mdbootstrap.com/">
            {" "}
            Cedar Oxygen
          </a>
        </div>
      </footer>
    </div>
  );
}
