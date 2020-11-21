import React, { Component } from "react";
import Icon from "./icon";
import Filters from "./filters";

class Header extends Component {
  state = { filtersDisplay: "d-none" };
  handleSearchPlayer(e) {
    const player = e === "" ? "" : e.target.value;
    this.props.handleSearchPlayer(player);
  }
  handleTournamentsChange(tournaments) {
    this.props.handleTournamentsChange(tournaments);
  }
  handleIncludesMissedCutChange(includesMissedCut) {
    this.props.handleIncludesMissedCutChange(includesMissedCut);
  }
  handleIncludesAdjustedChange(includesAdjusted) {
    this.props.handleIncludesAdjustedChange(includesAdjusted);
  }
  toggleFilters() {
    const filtersDisplay =
      this.state.filtersDisplay === "d-none" ? "d-block mb-4 mt-4" : "d-none";
    this.setState({ filtersDisplay: filtersDisplay });
  }

  render() {
    const tournamentName =
      this.props.tournamentInfo === undefined
        ? ""
        : this.props.tournamentInfo.TournamentName;
    const courseName =
      this.props.tournamentInfo === undefined
        ? ""
        : this.props.tournamentInfo.CourseName;
    const startDate =
      this.props.tournamentInfo === undefined
        ? ""
        : new Date(this.props.tournamentInfo.StartDate).toLocaleDateString(
            "en-US",
            {
              dateStyle: "short",
            }
          );
    const icon = this.props.searchPlayer === "" ? "" : "xicon";

    return (
      <React.Fragment>
        <div className="container-fluid" style={{ paddingTop: "56px" }}>
          <div className="mt-3">
            <h2>{tournamentName}</h2>
            <h6>{courseName}</h6>
            <h6>
              <small className="text-muted">{startDate}</small>
            </h6>
          </div>
          <div className="mt-4 mb-3 d-flex flex-row-reverse">
            <button
              className="btn btn-sm btn-outline-dark"
              onClick={() => this.toggleFilters()}
            >
              <Icon icon={"filter"} /> Filters
            </button>
            <div className="pr-2 flex-grow-1">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control SearchBar shadow-none"
                  id="playerSearch"
                  placeholder="Search by player name"
                  value={this.props.searchPlayer}
                  onChange={(e) => this.handleSearchPlayer(e)}
                  style={{ borderRightStyle: "none", borderColor: "#ced4da" }}
                ></input>
                <div className="input-group-append">
                  <span
                    className="input-group-text bg-white"
                    style={{ borderLeftStyle: "none", cursor: "pointer" }}
                    onClick={() => this.handleSearchPlayer("")}
                  >
                    <Icon icon={icon} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Filters
            filtersDisplay={this.state.filtersDisplay}
            playerCount={this.props.playerCount}
            tournaments={this.props.tournaments}
            includesAdjusted={this.props.includesAdjusted}
            includesMissedCut={this.props.includesMissedCut}
            handleTournamentsChange={this.props.handleTournamentsChange}
            handleIncludesAdjustedChange={
              this.props.handleIncludesAdjustedChange
            }
            handleIncludesMissedCutChange={
              this.props.handleIncludesMissedCutChange
            }
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
