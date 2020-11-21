import React, { Component } from "react";

class Filters extends Component {
  state = {};
  handleTournamentsChange(tournaments) {
    this.props.handleTournamentsChange(tournaments);
  }
  handleIncludesMissedCutChange(includesMissedCut) {
    this.props.handleIncludesMissedCutChange(includesMissedCut);
  }
  handleIncludesAdjustedChange(includesAdjusted) {
    this.props.handleIncludesAdjustedChange(includesAdjusted);
  }
  render() {
    const playerCount = this.props.playerCount;
    const tournamentList = [1, 2, 3, 5, 10, 20];
    const filterHeaderTournaments =
      this.props.tournaments === 1 ? " tournament" : " tournaments";
    const filterHeader =
      "Include players with less than " +
      this.props.tournaments +
      filterHeaderTournaments;
    return (
      <div className={this.props.filtersDisplay}>
        <div>
          <small>Previous tournaments</small>
        </div>
        <div className="btn-group btn-group-sm mb-3 FilterButtonGroupTournaments">
          {tournamentList.map((tournaments) => (
            <button
              className="btn FilterButton"
              onClick={() => this.handleTournamentsChange(tournaments)}
              style={{
                backgroundColor:
                  tournaments === this.props.tournaments
                    ? "#F9AA33"
                    : "#f8f9fa",
              }}
            >
              {tournaments}
            </button>
          ))}
        </div>
        <div>
          <small>{filterHeader}</small>
        </div>
        <div className="btn-group btn-group-sm mb-3 FilterButtonGroupYesNo">
          <button
            className={"btn FilterButton"}
            onClick={() => this.handleIncludesAdjustedChange(true)}
            style={{
              backgroundColor: this.props.includesAdjusted
                ? "#F9AA33"
                : "#f8f9fa",
            }}
          >
            Yes
          </button>
          <button
            className={"btn FilterButton"}
            onClick={() => this.handleIncludesAdjustedChange(false)}
            style={{
              backgroundColor: !this.props.includesAdjusted
                ? "#F9AA33"
                : "#f8f9fa",
            }}
          >
            No
          </button>
        </div>
        <div>
          <small>Include players with missed cuts</small>
        </div>
        <div className="btn-group btn-group-sm FilterButtonGroupYesNo">
          <button
            className={"btn FilterButton"}
            onClick={() => this.handleIncludesMissedCutChange(true)}
            style={{
              backgroundColor: this.props.includesMissedCut
                ? "#F9AA33"
                : "#f8f9fa",
            }}
          >
            Yes
          </button>
          <button
            className={"btn FilterButton"}
            onClick={() => this.handleIncludesMissedCutChange(false)}
            style={{
              backgroundColor: !this.props.includesMissedCut
                ? "#F9AA33"
                : "#f8f9fa",
            }}
          >
            No
          </button>
        </div>
        <div className="mt-3">
          <small>{playerCount} players</small>
        </div>
      </div>
    );
  }
}

export default Filters;
