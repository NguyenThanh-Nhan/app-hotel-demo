import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1>
            Dasboard
          </h1>
          <div className="links">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  style={{ color: "rgb(77,77,77)", textDecoration: "none" }}
                >
                  All Hotels
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  to="/Create"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "rgb(77,77,77)",
                    borderRadius: "8px",
                  }}
                >
                  New Hotels
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
