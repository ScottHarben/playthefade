import React, { Component } from "react";

class ButtonClear extends Component {
  state = {};
  handleSearchPlayer(searchPlayer) {
    this.props.handleSearchPlayer(searchPlayer);
  }
  render() {
    return (
      <button
        type="button"
        className="btn btn-light"
        style={{ marginRight: "15px" }}
        onClick={() => this.handleSearchPlayer("")}
      >
        Clear
      </button>
    );
  }
}

export default ButtonClear;
