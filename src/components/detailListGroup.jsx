import React, { Component } from "react";
import { XIcon } from "@primer/octicons-react";

class DetailListGroup extends Component {
  state = {};
  handleRemoveComparePlayer(removePlayer) {
    this.props.handleRemoveComparePlayer(removePlayer);
  }
  handlePlayerClick(activePlayer) {
    this.props.handlePlayerClick(activePlayer);
  }
  render() {
    return (
      <ul className="list-group">
        {this.props.comparePlayers.map((player) => (
          <li className="list-group-item">
            <div className="row">
              <div
                className="col-lg-10"
                style={{ cursor: "pointer" }}
                onClick={() => this.handlePlayerClick(player)}
              >
                {player.ShortName}
              </div>
              <div className="col-lg-2">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.handleRemoveComparePlayer(player)}
                >
                  <XIcon />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default DetailListGroup;
