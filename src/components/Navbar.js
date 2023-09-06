import React from 'react'
import {Link} from "react-router-dom"
// import PropTypes from 'prop-types'




export default function Navbar(props) {

  // console.log(props.mode === 'light' ? 'dark' : 'light');

  return (

    <>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Textutil</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/">Features</Link>
                <Link className="nav-link" to="/About">About</Link>
                
              </div>
            </div>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.modeToggler} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
            </div>

          </div>


        </nav>
      </div>


    </>
  );
}
