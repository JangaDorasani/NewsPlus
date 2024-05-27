import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsPlus</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-4 mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" activeClassName="active" to="/business">Business</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" activeClassName="active" to="/entertainment">Entertainment</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" activeClassName="active" to="/general">General</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" activeClassName="active" to="/health">Health</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" activeClassName="active" to="/science">Science</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" activeClassName="active" to="/sports">Sports</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" activeClassName="active" to="/technology">Technology</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
