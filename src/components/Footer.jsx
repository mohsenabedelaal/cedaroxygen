import React from "react";
import "../App.css";
import "../componentscss/Footer.css";
// import "../componentscss"

export default function Footering() {
  return (
    <footer
      className="container-fluid page-footer font-small blue-grey lighten-5"
      style={{
        color: "white",
        // border: "0px solid transparentt",
        // height: "100vh",
      }}
    >
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
              className="navbar-brand"
              width="200"
              height="50"
              alt="icon"
            />
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <p>
              <a
                className="dark-grey-text footercolor"
                href="https://cedaroxygen.com/"
                style={{ fontWeight: "bold" }}
              >
                Home
              </a>
            </p>
            <p>
              <a
                className="dark-grey-text footercolor"
                href="https://cedaroxygen.com/"
                style={{ fontWeight: "bold" }}
              >
                About Us
              </a>
            </p>
            <p>
              <a className="dark-grey-text footercolor" href="https://cedaroxygen.com/our-story/">
                Our Story
              </a>
            </p>
            <p>
              <a className="dark-grey-text footercolor" href="https://cedaroxygen.com/the-team/">
                The Team
              </a>
            </p>
            <p>
              <a className="dark-grey-text footercolor" href="https://cedaroxygen.com/our-partners/">
                Our Partners
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <p>
              <a
                className="dark-grey-text footercolor"
                href="https://cedaroxygen.com/impact-finance-fund/"
                style={{ fontWeight: "bold" }}
              >
                The Fund
              </a>
            </p>
            <p>
              <a className="dark-grey-text footercolor" href="https://cedaroxygen.com/impact-finance-fund/">
                Our Investment Approach
              </a>
            </p>
            <p>
              <a className="dark-grey-text footercolor" href="https://cedaroxygen.com/esg-impact/">
                Impact Investing and ESG
              </a>
            </p>
            <p>
              <a
                className="dark-grey-text footercolor"
                href="https://cedaroxygen.com/?page_id=54"
                style={{ fontWeight: "bold" }}
              >
                Borrowers
              </a>
            </p>
            <p>
              <a
                className="dark-grey-text footercolor"
                href="https://cedaroxygen.com/?page_id=56"
                style={{ fontWeight: "bold" }}
              >
                Contact Us
              </a>
            </p>
          </div>

          <div className="col-md-3">
            <p>
              <a
                className="dark-grey-text footercolor"
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  fontFamily: "arial",
                }}
              >
                Subscribe to our Newsletter
              </a>
            </p>
            <di>
              <input
                style={{
                  width: "55%",
                  margin: "0%",
                  marginRight: "3%",
                  marginBottom: "10%",
                  display: "inline",
                  borderRadius: "2rem",
                }}
                type="email"
                class="form-control"
                // id="exampleFormControlInput1"
                placeholder="Your email"
              />
              <button
                class="btn btn-primary"
                type="submit"
                style={{
                  backgroundColor: "#33c7bf",
                  border: "1px solid #33c7bf",
                  borderRadius: "2rem",
                }}
              >
                Subscribe
              </button>
            </di>

            <div>
              <a className="fb-ic" href="#">
                <i className="fab fa-facebook-f white-text mr-4"> </i>
              </a>

              <a className="li-ic" href="#">
                <i className="fab fa-linkedin-in white-text mr-4"> </i>
              </a>

              <a className="ins-ic" href="#">
                <i className="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-copyright text-md-left text-xs-center text-black-50 py-3"
        // style={{ marginLeft: "10rem" }}
      >
        Copyright Cedar Oxygen © 2020 Cedar Oxygen. All rights reserved
        {/* <a className="dark-grey-text" href="https://mdbootstrap.com/">
            {" "}
            Cedar Oxygen
          </a> */}
      </div>
    </footer>
  );
}
