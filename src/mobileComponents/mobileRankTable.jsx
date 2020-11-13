import React, { Component } from "react";
import DataTable from "react-data-table-component";
import MobileRankColumns from "./mobileRankColumns";
import MobileDetailTable from "./mobileDetailTable";
import MobileSelectTournaments from "./mobileSelectTournaments";

const columns = MobileRankColumns();

class MobileRankTable extends Component {
  state = {};
  handleTournamentChange(tournaments) {
    this.props.handleTournamentChange(tournaments);
  }
  render() {
    const tournamentName =
      this.props.players.length === 0
        ? ""
        : this.props.players[0].TournamentName;
    return (
      <DataTable
        title={tournamentName}
        columns={columns}
        data={this.props.players}
        subHeader={true}
        subHeaderAlign={"right"}
        subHeaderComponent={[
          <MobileSelectTournaments
            handleTournamentChange={this.props.handleTournamentChange}
          />,
        ]}
        keyField={"DKPlayerID"}
        defaultSortField={"Rating"}
        defaultSortAsc={false}
        sortIcon={<React.Fragment />}
        expandableRows={true}
        expandOnRowClicked={true}
        expandableRowsHideExpander={true}
        expandableRowsComponent={
          <MobileDetailTable
            details={this.props.details}
            tournaments={this.props.tournaments}
          />
        }
        fixedHeader={true}
      />
    );
  }
}

export default MobileRankTable;
