import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/DBlog.png';
import { FaRegBell } from 'react-icons/fa';
import Avatar from '../assets/avatar.png';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mx-lg-5 mt-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <FaRegBell className="bell" />
              </div>
              <div className="p-1 display">
                <img src={Avatar} alt="display" className="rounded border-3" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
