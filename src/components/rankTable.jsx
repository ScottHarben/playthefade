import React, { Component } from "react";
import DataTable from "react-data-table-component";
import RankColumns from "./rankColumns";
import Search from "./search";
import ButtonClear from "./buttonClear";
import SelectTournaments from "./selectTournaments";

const columns = RankColumns();

class RankTable extends Component {
  state = {
    height: "",
  };

  handlePlayerClick(activePlayer) {
    this.props.handlePlayerClick(activePlayer);
  }
  handleSearchPlayer(searchPlayer) {
    this.props.handleSearchPlayer(searchPlayer);
  }
  handleTournamentChange(tournaments) {
    this.props.handleTournamentChange(tournaments);
  }

  componentDidMount() {
    const topPaddingPX = window
      .getComputedStyle(this.divElement, null)
      .getPropertyValue("padding-top");
    const topPaddingString = topPaddingPX.split("px")[0];
    const topPadding = parseFloat(topPaddingString);
    const height = this.divElement.clientHeight;
    const marginsAndHeader = 164.0 + topPadding; //padding-top, title, table header, subheader
    const tableBodyHeight = height - marginsAndHeader;
    this.setState({ height: tableBodyHeight + "px" });
  }

  render() {
    const tournamentName =
      this.props.players.length === 0
        ? ""
        : this.props.players[0].TournamentName;
    const buttonClear =
      this.props.searchPlayer === "" ? (
        <React.Fragment />
      ) : (
        <ButtonClear handleSearchPlayer={this.props.handleSearchPlayer} />
      );
    const activePlayerID = this.props.activePlayerId;
    const conditionalRowStyles = [
      {
        when: (row) => row.DKPlayerID === activePlayerID,
        style: {
          backgroundColor: "#eeeeee",
        },
      },
    ];
    return (
      <div className="card h-100 shadow-sm">
        <div
          className="card-body h-100"
          ref={(divElement) => {
            this.divElement = divElement;
          }}
        >
          <DataTable
            title={tournamentName}
            columns={columns}
            data={this.props.players}
            keyField={"DKPlayerID"}
            responsive={true}
            fixedHeader={true}
            fixedHeaderScrollHeight={this.state.height}
            pointerOnHover={true}
            highlightOnHover={true}
            defaultSortField={"Rating"}
            defaultSortAsc={false}
            onRowClicked={(rowData) => this.handlePlayerClick(rowData)}
            subHeader={true}
            subHeaderAlign={"right"}
            subHeaderComponent={[
              buttonClear,
              <Search
                handleSearchPlayer={this.props.handleSearchPlayer}
                searchPlayer={this.props.searchPlayer}
              />,
              <SelectTournaments
                handleTournamentChange={this.props.handleTournamentChange}
              />,
            ]}
            conditionalRowStyles={conditionalRowStyles}
          />
        </div>
      </div>
    );
  }
}

export default RankTable;
