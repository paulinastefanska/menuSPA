import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import "../styles/ContactPage.css";

class ContactPage extends Component {
  state = {
    value: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: ""
    });
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Write to us</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="write message..."
          ></textarea>
          <button>Send</button>
        </form>
        <Prompt
          when={this.state.value}
          message="You have not completed the form. Are you sure you want to leave?"
        />
      </div>
    );
  }
}

export default ContactPage;
