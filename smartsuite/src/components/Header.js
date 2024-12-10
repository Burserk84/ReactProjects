import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/Global.css";
import { Link } from "react-router-dom";
import { navData } from "../utils/navData";
import { useExpand } from "./useExpand";

export const Header = () => {
  const { expand, toggleExpand } = useExpand(); // custom hook for toggle

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Project name leading to home */}
          <Link className="navbar-brand" to="/">
            SmartSuite
          </Link>

          {/* Align toggle button to the right */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={expand === 1}
            aria-label="Toggle navigation"
            onClick={toggleExpand}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation links */}
          <div
            className={`collapse navbar-collapse ${expand === 1 ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center">
              {navData.map((item) => (
                <li className="nav-item" key={item.id}>
                  <Link className="nav-link" to={item.src}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
