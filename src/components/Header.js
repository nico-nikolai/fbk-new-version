import React, { Component } from "react";
import { Link } from "react-router-dom";

const headerStyle = {

}

export default class Header extends Component {
  render() {
    return (
      <div style={{headerStyle}}>
        <Link to="/home" onMouseOver="this.style.cursor='pointer'">
          Fat Betty Knits
          <div className="logo">
        <img style={{height: "5rem", width: "5rem"}} src="/images/fbk-logo1.jpg" alt="Fat Betty Knits Logo"/>
        </div>
        </Link>

        <Link to="/our-story">Our Story</Link>
        <Link to="/store">Store</Link>
        <Link to="/admin" hidden>
          Admin
        </Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    );
  }
}

