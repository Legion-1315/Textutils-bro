import React from 'react'
import PropTypes from 'prop-types'

//commented to remove routing for gh pages
import { Link } from 'react-router-dom';
//also replace Link to with a href respectively
export default function Navbar(props) {
  const changeGreen = () =>
  {
    // document.body.style.backgroundColor = '#111116';
    document.body.style.backgroundColor = '#0f3c48';
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand " href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.first}</Link>
            {/* <a className="nav-link active" aria-current="page" href="#">{props.first}</a> */}
              </li>
          <li className="nav-item">
                <Link className="nav-link" to="/Accordion">{props.second}</Link>
                {/* <a className="nav-link" href="/Accordion">{props.second}</a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">{props.third}</Link>
          </li>
          <div className="dropdown mx-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                More layout colors
              </button>
              <ul className="dropdown-menu">
                <button className="dropdown-item" href="#" onClick={changeGreen}>Dark Theme One</button>
                {/* <button className="dropdown-item" href="/" onClick={changeBlue}>2</button> */}
                {/* <button className="dropdown-item" href="/" onClick={changeRed}>3</button> */}
              </ul>
            </div>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className={` form-check form-switch text-${props.Mode === 'light' ? 'dark' : 'light'} mx-2 `}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DARK MODE</label>
        </div>
      </div>
    </div>
      </nav>
      </>
  )
}

//Proptyes security check to validate the type of content we are receiving through props
Navbar.prototype = {
    title: PropTypes.string,
    first: PropTypes.string,
    second: PropTypes.string,
    third : PropTypes.string
}

//default props sets the default value when that property is not passed with props
Navbar.defaultProps = {
    title: "Title here",
    first : "First option here",
    second : "Second option here",
    third : "Third option here"
}