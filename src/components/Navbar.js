import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="#">
              <img src='https://framerusercontent.com/images/hslc4uI27FRmikd0pFavyN3Z6YY.png' alt='Sharpe AI' className='navImg' />
            </Link>
          </div>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ml-2">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ml-2">
                <Link className="nav-link" to="/transaction">
                  Transaction
                </Link>
              </li>
              <li className="nav-item ml-2">
                <Link className="nav-link" to="/data">
                  Data
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
