import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/css/dashboard.css";
import "/js/delete-post.js";
import "/js/login.js";
import "/js/logout.js";
import "/js/new-post.js";
import "/js/signup.js";
import "/js/edit-post.js";
import "/js/new-comment.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Main = ({ loggedIn, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thomas' Chess Blog</title>
      </head>
      <body className="bg-dark text-white">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand fs-2" href="/">Thomas' Chess Blog</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  {loggedIn ? (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/dashboard">Dashboard</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#" id="chess-logout">Logout</a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/signup">Sign Up</a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="container">{children}</div>
        <footer className="bg-dark text-white py-3" style={{ position: "fixed", bottom: 0, width: "100%" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <h5>&copy; Designed with ⏳ by Thomas Calle</h5>
                <h6>&copy; 2023 All Rights Reserved.</h6>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Main;