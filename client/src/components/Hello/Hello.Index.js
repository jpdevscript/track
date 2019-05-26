import React, { Component } from "react";
import "./hello.scss";

class Hello extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onHandleSumbit(this.props.post);
  };

  handleTextChange = evt => {
    evt.preventDefault();
    this.props.onHandleTextChange(evt.target.value);
  };

  render() {
    return (
      <div className="container">
        <form className="container--form" onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.props.post}
            onChange={e => this.handleTextChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.props.response}</p>
      </div>
    );
  }
}

export default Hello;
