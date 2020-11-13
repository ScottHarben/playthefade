import React, { Component } from "react";

class MobileSelectTournaments extends Component {
  state = {};
  handleTournamentChange(e) {
    this.props.handleTournamentChange(parseInt(e.target.value));
  }
  render() {
    return (
      <React.Fragment>
        <span style={{ marginRight: "10px" }}>Previous</span>
        <select
          className="form-control"
          id="selectTournaments"
          style={{ width: "75px", marginRight: "10px" }}
          onChange={(e) => this.handleTournamentChange(e)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3} selected>
            3
          </option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </React.Fragment>
    );
  }
}

export default MobileSelectTournaments;
