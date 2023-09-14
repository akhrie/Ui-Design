import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-md navbar-light pt-0 pb-0">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="navbar-brand p-0 me-5">
            <span className="color-wave-text">NSSB</span>
          </Link>

          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown messages-menu">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/AddCandidate" // Replace with your route path
                  id="navbarDropdownMenuLink1" // Unique ID for this dropdown
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell-o" />
                  <span className="label label-success bg-success">10</span>
                </Link>
                {/* ... rest of your code */}
              </li>
              <li className="nav-item dropdown notifications-menu">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/AddCandidate" // Replace with your route path
                  id="navbarDropdownMenuLink2" // Unique ID for this dropdown
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-envelope-o" />
                  <span className="label label-warning bg-warning">10</span>
                </Link>
                {/* ... rest of your code */}
              </li>
              <li className="nav-item dropdown user-menu">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/ManageAddCandidate" // Replace with your route path
                  id="navbarDropdownMenuLink3" // Unique ID for this dropdown
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fa fa-user-circle-o" />
                  <span className="hidden-xs"> Profile</span>
                </Link>
                {/* ... rest of your code */}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default MyNavbar;
