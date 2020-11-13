import React, { Component } from "react";
import { PinIcon } from "@primer/octicons-react";

class DetailListGroup extends Component {
  state = {};

  handleAddComparePlayer(comparePlayer) {
    this.props.handleAddComparePlayer(comparePlayer);
  }
  handlePlayerClick(activePlayer) {
    this.props.handlePlayerClick(activePlayer);
  }
  render() {
    const pendingPlayer = this.props.pendingPlayer;
    const playerPendingShortName = pendingPlayer.ShortName;
    const comparePlayers = this.props.comparePlayers;
    if (playerPendingShortName !== undefined) {
      if (comparePlayers.length > 4) {
        return (
          <ul className="list-group" style={{ marginBottom: "15px" }}>
            <li className="list-group-item shadow-sm">
              <div className="row">
                <div
                  className="col-lg-10"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handlePlayerClick(pendingPlayer)}
                >
                  {playerPendingShortName}
                </div>
                <div className="col-lg-2"></div>
              </div>
            </li>
          </ul>
        );
      }
      return (
        <ul className="list-group" style={{ marginBottom: "15px" }}>
          <li className="list-group-item shadow-sm">
            <div className="row">
              <div
                className="col-lg-10"
                style={{ cursor: "pointer" }}
                onClick={() => this.handlePlayerClick(pendingPlayer)}
              >
                {playerPendingShortName}
              </div>
              <div className="col-lg-2">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    this.props.handleAddComparePlayer(pendingPlayer)
                  }
                >
                  <PinIcon />
                </div>
              </div>
            </div>
          </li>
        </ul>
      );
    }
    return <React.Fragment></React.Fragment>;
  }
}

export default DetailListGroup;
