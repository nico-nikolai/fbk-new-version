import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import { connect } from "react-redux";
import { createContact, clearContact } from "../actions/contactActions";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      question: "",
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createContact = (event) => {
    event.preventDefault();
    const contact = {
      name: this.state.name,
      email: this.state.email,
      question: this.state.question,
    };
    this.props.createContact(contact);
  };

  closeModal = () => {
    this.props.clearContact();
  };

  render() {
    const { contact } = this.props;
    return (
      <div>
        <Zoom>
          <div className="">
            <h2>Contact Us!</h2>
            <h3>Ask a Question!</h3>
            <p>
              Enter your info and question below and we'll get right back to
              you.
            </p>

            <ul>
              <li>
                <div>Name:</div>
                <div>{contact.name}</div>
              </li>
            </ul>

          </div>
        </Zoom>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    contact: state.contact,
  }),
  {
    createContact,
    clearContact,
  }
)(Contact);
