import React, { Component } from "react";
import DataTable from "react-data-table-component";
import MobileDetailColumns from "./mobileDetailColumns";

const columns = MobileDetailColumns();

class DetailTable extends Component {
  state = {};

  render() {
    const activePlayer = this.props.data;
    const details = this.props.details.filter((player) => {
      return (
        player.DKPlayerID === activePlayer.DKPlayerID &&
        player.TournamentOrder <= this.props.tournaments
      );
    });
    return (
      <div class="my-4">
        <DataTable
          noHeader={true}
          columns={columns}
          data={details}
          dense={true}
        />
      </div>
    );
  }
}

export default DetailTable;
