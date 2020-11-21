import React, { Component } from "react";
class List extends Component {
  state = {};
  handleSortByChange(sortBy) {
    this.props.handleSortByChange(sortBy);
  }

  handlePlayerClick(activePlayer, activePlayerDetails) {
    this.props.handlePlayerClick(activePlayer, activePlayerDetails);
  }

  render() {
    const players = this.props.players === undefined ? [] : this.props.players;
    return (
      <>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item sticky-top shadow-sm bg-light"
            style={{ top: "56px" }}
          >
            <div className="row">
              <div
                className="col-2 px-0 text-center SortBy"
                onClick={() => this.handleSortByChange("Rating")}
                style={{
                  borderBottomStyle:
                    this.props.sortBy === "Rating" ? "solid" : "none",
                  borderBottomColor: "#F9AA33",
                  borderBottomWidth: "1.5px",
                }}
              >
                <small>Rating</small>
              </div>
              <div
                className="col-2 px-0 text-center SortBy"
                onClick={() => this.handleSortByChange("Value")}
                style={{
                  borderBottomStyle:
                    this.props.sortBy === "Value" ? "solid" : "none",
                  borderBottomColor: "#F9AA33",
                  borderBottomWidth: "1.5px",
                }}
              >
                <small>Value</small>
              </div>
              <div
                className="col-2 px-0 text-center SortBy"
                onClick={() => this.handleSortByChange("StandardDeviation")}
                style={{
                  borderBottomStyle:
                    this.props.sortBy === "StandardDeviation"
                      ? "solid"
                      : "none",
                  borderBottomColor: "#F9AA33",
                  borderBottomWidth: "1.5px",
                }}
              >
                <small>Volitility</small>
              </div>
              <div
                className="col-2 px-0 text-center SortBy"
                onClick={() => this.handleSortByChange("Slope")}
                style={{
                  borderBottomStyle:
                    this.props.sortBy === "Slope" ? "solid" : "none",
                  borderBottomColor: "#F9AA33",
                  borderBottomWidth: "1.5px",
                }}
              >
                <small>Trend</small>
              </div>
              <div className="col-2"></div>
              <div
                className="col-2 text-right SortBy"
                onClick={() => this.handleSortByChange("Salary")}
                style={{
                  borderBottomStyle:
                    this.props.sortBy === "Salary" ? "solid" : "none",
                  borderBottomColor: "#F9AA33",
                  borderBottomWidth: "1.5px",
                }}
              >
                <small>Salary</small>
              </div>
            </div>
          </li>
          {players.map((player) => {
            const details = this.props.details.filter((detail) => {
              return detail.DKPlayerID === player.DKPlayerID;
            });
            return (
              <li
                class="list-group-item"
                style={{ cursor: "pointer" }}
                onClick={() => this.handlePlayerClick(player, details)}
              >
                <div className="row">
                  <div className="col-9">
                    <h6>
                      {player.FirstName + " " + player.LastName}{" "}
                      <small
                        className={
                          "text-muted" +
                          (player.FinishPointsAdjusted === 1 ? " ml-1" : "")
                        }
                        style={{ fontSize: "10px" }}
                      >
                        {player.FinishPointsAdjusted === 1 ? "A" : ""}
                      </small>
                      <small
                        className={
                          "text-muted" +
                          (player.IncludesMissedCut === 1 ? " ml-1" : "")
                        }
                        style={{ fontSize: "10px" }}
                      >
                        {player.IncludesMissedCut === 1 ? "MC" : ""}
                      </small>
                    </h6>
                  </div>
                  <div className="col-3 text-right">
                    <small>${player.Salary}</small>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-2 px-0 text-center"
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: "1px",
                      borderRightColor: "#eeeeee",
                    }}
                  >
                    <small>{player.Rating}</small>
                  </div>
                  <div
                    className="col-2 px-0 text-center"
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: "1px",
                      borderRightColor: "#eeeeee",
                    }}
                  >
                    <small>{player.Value}</small>
                  </div>
                  <div
                    className="col-2 px-0 text-center"
                    style={{
                      borderRightStyle: "solid",
                      borderRightWidth: "1px",
                      borderRightColor: "#eeeeee",
                    }}
                  >
                    <small>{player.Volitility}</small>
                  </div>
                  <div className="col-2 px-0 text-center">
                    <small>{player.Trend}</small>
                  </div>
                  <div className="col-2 px-0 text-center"></div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default List;
