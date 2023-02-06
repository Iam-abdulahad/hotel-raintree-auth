import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase">Hotel Name</h5>
            <p>
              123 Main St <br />
              City, State Zip <br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Rooms</a>
              </li>
              <li>
                <a href="#">Amenities</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase">Subscribe</h5>
            <p>
              Subscribe to our newsletter for special offers and latest news.
            </p>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-3">
          &copy; {new Date().getFullYear()} Hotel Raintree | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
