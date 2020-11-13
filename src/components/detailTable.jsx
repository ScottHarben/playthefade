import React, { Component } from "react";
import DataTable from "react-data-table-component";
import DetailColumns from "./detailColumns";
import DetailListGroup from "./detailListGroup";
import DetailListPending from "./detailListPending";
import ButtonDraft from "./buttonDraft";

class DetailTable extends Component {
  state = {
    height: "",
  };
  handleAddComparePlayer(comparePlayer) {
    this.props.handleAddComparePlayer(comparePlayer);
  }
  handleRemoveComparePlayer(removePlayer) {
    this.props.handleRemoveComparePlayer(removePlayer);
  }
  handlePlayerClick(activePlayer) {
    this.props.handlePlayerClick(activePlayer);
  }

  componentDidMount() {
    const topPaddingPX = window
      .getComputedStyle(this.divElement, null)
      .getPropertyValue("padding-top");
    const topPaddingString = topPaddingPX.split("px")[0];
    const topPadding = parseFloat(topPaddingString);
    const height = this.divElement.clientHeight;
    const marginsAndHeader = 112.0 + topPadding; //padding-top, title, table header
    const tableBodyHeight = height - marginsAndHeader;
    this.setState({ height: tableBodyHeight + "px" });
  }

  render() {
    const columns = DetailColumns(this.props.tournaments);
    const activePlayer = this.props.activePlayer;
    const playerName =
      activePlayer.DKPlayerID === undefined
        ? ""
        : activePlayer.FirstName + " " + activePlayer.LastName;
    return (
      <div className="card h-100 shadow-sm">
        <div
          className="card-body h-100"
          ref={(divElement) => {
            this.divElement = divElement;
          }}
        >
          <div className="row">
            <div className="col-md-3">
              <DetailListPending
                pendingPlayer={this.props.pendingPlayer}
                comparePlayers={this.props.comparePlayers}
                handleAddComparePlayer={this.props.handleAddComparePlayer}
                handlePlayerClick={this.props.handlePlayerClick}
              />
              <DetailListGroup
                pendingPlayer={this.props.pendingPlayer}
                comparePlayers={this.props.comparePlayers}
                handleRemoveComparePlayer={this.props.handleRemoveComparePlayer}
                handlePlayerClick={this.props.handlePlayerClick}
              />
            </div>
            <div className="col-md-9">
              <DataTable
                title={playerName}
                columns={columns}
                data={this.props.details}
                responsive={true}
                fixedHeader={true}
                fixedHeaderScrollHeight={this.state.height}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailTable;
