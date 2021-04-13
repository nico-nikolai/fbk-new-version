import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
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
          <div className="our">
            <h2>Contact Us!</h2>
            <h3>Ask a Question!</h3>
            <p>
              Enter your info and question below and we'll get right back to
              you.
            </p>
            </div>
            </Zoom>

            <Fade>
              <form>
                <ul className="form-container">
                  <li>
                    <label>Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      onChange={this.handleInput}
                    ></input>
                  </li>
                  <li>
                      <label>Email</label>
                      <input name="email" type="email" required onChange={this.handleInput}></input>
                  </li>
                  <li>
                      <label>Question</label>
                      <input name="question" type="textbox" required onChange={this.handleInput}></input>
                  </li>
                </ul>
              </form>
            </Fade>


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
