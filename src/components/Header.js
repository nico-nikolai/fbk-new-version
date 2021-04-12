import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faBlog } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  render() {
    return (
      <div className="header-content">
        <Jumbotron fluid>
          <Link to="/home" onMouseOver="this.style.cursor='pointer'">
            <div className="logo">
              <img
                style={{ height: "10rem", width: "10rem" }}
                src="/images/fbk-logo1.jpg"
                alt="Fat Betty Knits Logo"
              />
            </div>
          </Link>
        </Jumbotron>
        <Link to="/our-story">
          <i className="fa fa-book fa-lg" /> Our Story
        </Link>
        <Link to="/store">
          <FontAwesomeIcon icon={faStore} />
          <i className="fa fa-store fa-lg" /> Store
        </Link>
        <Link to="/blogs">
          <FontAwesomeIcon icon={faBlog} />
          <i className="fa fa-blog fa-lg" /> Blog
        </Link>
        <Link to="/contact-us">
          <i className="" /> Contact
        </Link>
        <Link to="/admin" hidden>
          Admin
        </Link>
      </div>
    );
  }
}
