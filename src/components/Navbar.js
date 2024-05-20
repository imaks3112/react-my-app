import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Text Utils
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: 'space-between'}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            
            <div className="d-flex">
              <button className="bg-primary rounded mx-2" style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={ () => props.toggleMode('primary')}></button>
              <button className="bg-danger rounded mx-2" style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={ () => props.toggleMode('danger')}></button>
              <button className="bg-success rounded mx-2" style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={ () => props.toggleMode('success')}></button>
              <button className="bg-warning rounded mx-2" style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={ () => props.toggleMode('warning')}></button>
              <button className="bg-secondary rounded mx-2" style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={ () => props.toggleMode('secondary')}></button>
              <button className="bg-light rounded mx-2" style={{width: '30px', height: '30px', cursor: 'pointer'}} onClick={ () => props.toggleMode('light')}></button>
            </div>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={() => props.toggleMode(null)}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
