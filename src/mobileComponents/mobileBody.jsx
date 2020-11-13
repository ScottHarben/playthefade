import React, { Component } from "react";
import MobileRankTable from "./mobileRankTable";
const axios = require("axios").default;

class MobileBody extends Component {
  constructor(props) {
    super(props);
    this.handleTournamentChange = this.handleTournamentChange.bind(this);
    this.state = {
      players: [],
      details: [],
      tournaments: 3,
    };
  }

  handleTournamentChange(tournaments) {
    this.setState({
      tournaments: tournaments,
    });
  }

  async callAPI() {
    const players = await axios.get(
      "https://scottsubuntuserver.com/GetPlayerRankings"
    );
    const details = await axios.get(
      "https://scottsubuntuserver.com/GetPlayerRankingDetails"
    );
    this.setState({
      players: players.data,
      details: details.data,
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    //rankTable
    const players = this.state.players.filter((player) => {
      return player.NumberOfTournaments === this.state.tournaments;
    });

    //detailsTable
    const details = this.state.details;
    details.forEach((obj) => {
      const d = new Date(obj.StartDate);
      obj.StartDate = d.toLocaleDateString("en-US", {
        dateStyle: "short",
      });
    });

    return (
      <React.Fragment>
        <MobileRankTable
          players={players}
          details={details}
          tournaments={this.state.tournaments}
        />
      </React.Fragment>
    );
  }
}

export default MobileBody;
