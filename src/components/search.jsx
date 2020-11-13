import React, { Component } from "react";

class Search extends Component {
  state = {};
  handleSearchPlayer(e) {
    this.props.handleSearchPlayer(e.target.value);
  }
  render() {
    return (
      <input
        type="text"
        className="form-control"
        id="playerSearch"
        placeholder="Search by player name"
        style={{ width: "25%", marginRight: "30px" }}
        value={this.props.searchPlayer}
        onChange={(e) => this.handleSearchPlayer(e)}
      ></input>
    );
  }
}

export default Search;
