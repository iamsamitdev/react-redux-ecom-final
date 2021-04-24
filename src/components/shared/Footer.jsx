/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-left text-md-left">
        <div className="row text-left text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">
              About Us
            </h5>
            <hr className="mb-4" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim
              minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">
              Let Us Help
            </h5>
            <hr className="mb-4" />
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Your Account
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Your Orders
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Manage Your Content and Devices
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Help
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">
              Make Money
            </h5>
            <hr className="mb-4" />
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Sell products on our Website
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Advertise Your Products
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                Become an Affiliates
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Self-Publish
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">
              Contact
            </h5>
            <hr className="mb-4" />
            <p>
              <i className="fas fa-home mr-3" />
              &nbsp;New York, NY 2333, US
            </p>
            <p>
              <i className="fas fa-envelope mr-3" />
              &nbsp;theproviders98@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3" />
              &nbsp;+12 3456789
            </p>
            <p>
              <i className="fas fa-print	 mr-3" />
              &nbsp;+12 3456789
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className=" row d-flex justify-content-center">
          <div className="text-center">
            <p>
              {" "}
              Copyright ©2020 All rights reserved by: &nbsp;
              <a href="#" style={{ textDecoration: "none" }}>
                <strong className="text-info">The Providers</strong>
              </a>
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="text-center ">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className=" text-light">
                  <i className="fab fa-google-plus" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className=" text-light">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className=" text-light">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
