import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-home" /> Secrets
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/male">
                <i className="fas fa-mars" /> Male
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/female">
                <i className="fas fa-venus" /> Female
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/other">
                <i className="fas fa-genderless" /> Other
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/nsfw">
                <i className="fas fa-user-secret" /> NSFW
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
