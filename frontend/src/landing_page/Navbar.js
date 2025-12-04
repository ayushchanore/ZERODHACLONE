import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css"

function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/logo.svg" style={{ width: "25%" }} alt="logo" />
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
{/* 
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item">
              {isAuthenticated ? (
                <>
                  <span className="me-2">Hi, {user?.name}</span>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: {
                          returnTo: window.location.origin,
                        },
                      })
                    }
                    className="button login"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="button login"
                >
                  Log In
                </button>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

