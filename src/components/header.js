import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/DBlog.png';
import { FaRegBell } from 'react-icons/fa';
import Avatar from '../assets/avatar.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid mb-3 mx-lg-5">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex justify-content-end collapse navbar-collapse" id="navbarToggler">
            <div className="d-flex mobile">
              <div className="m-3 justify-content-center d-flex">
                <FaRegBell className="bell" />
              </div>
              <div className="display p-1">
                <img src={Avatar} alt="display" className="rounded border-3" />
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Header;
