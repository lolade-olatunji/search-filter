import React from 'react';
import { FiMoreVertical } from "react-icons/fi";
import "../styles/nav.css";

function nav() {
  return <div className="main-cont">
      <div className="inn">
        <div className="nav-logo">
          <h3>
            <span>Bur</span>gers
          </h3>
        </div>
        <div className="navs">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="fi-icon">
          <FiMoreVertical />
        </div>
      </div>
    </div>;
}

export default nav