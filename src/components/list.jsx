import React, { Component } from "react";
import Icon from "./icon";

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
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item sticky-top shadow-sm bg-light"
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
                onClick={() => this.handleSortByChange("Rsquared")}
                style={{
                  borderBottomStyle:
                    this.props.sortBy === "Slope" ? "solid" : "none",
                  borderBottomColor: "#F9AA33",
                  borderBottomWidth: "1.5px",
                }}
              >
                <small>Trending</small>
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
            let trendArrow = <React.Fragment />;
            if (player !== undefined) {
              if (player.Rsquared < 0) {
                trendArrow = (
                  <span className="text-muted">
                    <Icon icon={"arrowDown"} />
                  </span>
                );
              } else if (player.Rsquared > 0) {
                trendArrow = (
                  <span style={{ color: "#F9AA33" }}>
                    <Icon icon={"arrowUp"} />
                  </span>
                );
              } else {
                trendArrow = <React.Fragment />;
              }
            }
            let vol1 = "0%";
            let vol2 = "0%";
            let vol3 = "0%";
            let vol4 = "0%";
            let vol5 = "0%";
            let volBack = "100%";
            if (player.VolitilityRank === 1) {
              vol1 = "20%";
              volBack = "80%";
            } else if (player.VolitilityRank === 2) {
              vol1 = "20%";
              vol2 = "20%";
              volBack = "60%";
            } else if (player.VolitilityRank === 3) {
              vol1 = "20%";
              vol2 = "20%";
              vol3 = "20%";
              volBack = "40%";
            } else if (player.VolitilityRank === 4) {
              vol1 = "20%";
              vol2 = "20%";
              vol3 = "20%";
              vol4 = "20%";
              volBack = "20%";
            } else if (player.VolitilityRank === 5) {
              vol1 = "20%";
              vol2 = "20%";
              vol3 = "20%";
              vol4 = "20%";
              vol5 = "20%";
              volBack = "0%";
            }
            const salary = player.Salary.toString();

            const details = this.props.details.filter((detail) => {
              return detail.DKPlayerID === player.DKPlayerID;
            });
            return (
              <li
                key={player.DKPlayerID}
                className="list-group-item"
                style={{ cursor: "pointer" }}
                onClick={() => this.handlePlayerClick(player, details)}
              >
                <div className="row">
                  <div className="col-9">
                    <h6>
                      {player.FirstName + " " + player.LastName}
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
                    <small>
                      $
                      {salary.substring(0, salary.length - 3) +
                        "," +
                        salary.substring(salary.length - 3, salary.length)}
                    </small>
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
                    {/* <small style={{ fontSize: "12px" }}>
                      {player.Volitility}
                    </small> */}
                    <div className="container-fluid h-100">
                      <div className="row h-100">
                        <div className="col-4 px-0 h-100">
                          <small>
                            {player.StandardDeviation === 999
                              ? ""
                              : player.VolitilityRank}
                          </small>
                        </div>
                        <div className="col-8 px-1 h-100">
                          <div className="d-flex align-items-center h-100">
                            <span
                              className="h-25"
                              style={{
                                backgroundColor: "#F9AA33",
                                width: vol1,
                                borderTopLeftRadius: "2px",
                                borderBottomLeftRadius: "2px",
                              }}
                            ></span>
                            <span
                              className="h-25"
                              style={{
                                backgroundColor: "#F9AA33",
                                width: vol2,
                              }}
                            ></span>
                            <span
                              className="h-25"
                              style={{
                                backgroundColor: "#F9AA33",
                                width: vol3,
                              }}
                            ></span>
                            <span
                              className="h-25"
                              style={{
                                backgroundColor: "#F9AA33",
                                width: vol4,
                              }}
                            ></span>
                            <span
                              className="h-25"
                              style={{
                                backgroundColor: "#F9AA33",
                                width: vol5,
                                borderTopRightRadius: "2px",
                                borderBottomRightRadius: "2px",
                              }}
                            ></span>
                            <span
                              className="h-25 bg-light"
                              style={{
                                width: volBack,
                                borderTopRightRadius: "2px",
                                borderBottomRightRadius: "2px",
                              }}
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 px-0 text-center">
                    <small>
                      {player.Rsquared} {trendArrow}
                    </small>
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
