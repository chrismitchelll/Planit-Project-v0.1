import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./foot.scss";

export class Footer extends Component {
  render() {
    return (
      <>
        <nav className="menu">
          <ol>
            <li className="menu-item">
              <a href="#0">Home</a>
            </li>
            <li className="menu-item">
              <a href="#0">About</a>
            </li>
            <li className="menu-item">
              <a href="#0">Widgets</a>
              <ol className="sub-menu">
                <li className="menu-item">
                  <a href="#0">Big Widgets</a>
                </li>
                <li className="menu-item">
                  <a href="#0">Bigger Widgets</a>
                </li>
                <li className="menu-item">
                  <a href="#0">Huge Widgets</a>
                </li>
              </ol>
            </li>
            <li className="menu-item">
              <a href="#0">Kabobs</a>
              <ol className="sub-menu">
                <li className="menu-item">
                  <a href="#0">Shishkabobs</a>
                </li>
                <li className="menu-item">
                  <a href="#0">BBQ kabobs</a>
                </li>
                <li className="menu-item">
                  <a href="#0">Summer kabobs</a>
                </li>
              </ol>
            </li>
            <li className="menu-item">
              <a href="#0">Contact</a>
            </li>
          </ol>
        </nav>
      </>
    );
  }
}

export default Footer;
