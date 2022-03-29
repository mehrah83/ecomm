import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {totalQuantities} = useSelector(state => state.CartReducer)
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0"
        style={{ zIndex: "1" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mehra Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/cart">
                 <button className="btn btn-primary" type="submit">
                  Cart ({totalQuantities})
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
