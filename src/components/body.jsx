import React, { Component } from "react";
import Header from "./header";
import List from "./list";

const axios = require("axios").default;

class Body extends Component {
  constructor(props) {
    super(props);
    this.handleSearchPlayer = this.handleSearchPlayer.bind(this);

    this.handleIncludesAdjustedChange = this.handleIncludesAdjustedChange.bind(
      this
    );
    this.handleIncludesMissedCutChange = this.handleIncludesMissedCutChange.bind(
      this
    );
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.state = {
      players: [],
      details: [],
      searchPlayer: "",
      includesMissedCut: true,
      includesAdjusted: true,
      sortBy: "Rating",
    };
  }

  handleSearchPlayer(searchPlayer) {
    this.setState({ searchPlayer: searchPlayer });
  }
  handleIncludesAdjustedChange(includesAdjusted) {
    this.setState({ includesAdjusted: includesAdjusted });
  }
  handleIncludesMissedCutChange(includesMissedCut) {
    this.setState({ includesMissedCut: includesMissedCut });
  }
  handleSortByChange(sortBy) {
    this.setState({ sortBy: sortBy });
  }

  handlePlayerClick(activePlayer, activePlayerDetails) {
    this.props.handlePlayerClick(activePlayer, activePlayerDetails);
  }
  handleTournamentsChange(tournaments) {
    this.props.handleTournamentsChange(tournaments);
  }

  async callAPI() {
    // const rankingsURL = "http://localhost:9000/GetPlayerRankings";
    // const detailsURL = "http://localhost:9000/GetPlayerRankingDetails";
    const rankingsURL = "https://scottsubuntuserver.com/GetPlayerRankings";
    const detailsURL = "https://scottsubuntuserver.com/GetPlayerRankingDetails";
    const players = await axios.get(rankingsURL);
    const details = await axios.get(detailsURL);
    this.setState({
      players: players.data,
      details: details.data,
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const tournamentInfo = this.state.players[0];

    const playersByTournaments = this.state.players.filter((player) => {
      return player.NumberOfTournaments === this.props.tournaments;
    });
    const playersByMissedCut =
      this.state.includesMissedCut === true
        ? playersByTournaments
        : playersByTournaments.filter((player) => {
            return player.IncludesMissedCut === 0 && player.Rating > 0; //player must have at least one tournament
          });
    const playersByAdjusted =
      this.state.includesAdjusted === true
        ? playersByMissedCut
        : playersByMissedCut.filter((player) => {
            return player.FinishPointsAdjusted === 0 && player.Rating > 0; //player must have at least one tournament
          });
    const players = playersByAdjusted.filter((player) => {
      const playerFullName =
        player.FirstName.toLowerCase() + " " + player.LastName.toLowerCase();
      const searchPlayer = this.state.searchPlayer.toLowerCase();
      return playerFullName.search(searchPlayer) > -1;
    });
    if (
      this.state.sortBy === "StandardDeviation" ||
      this.state.sortBy === "Slope"
    ) {
      players.sort((a, b) =>
        a[this.state.sortBy] > b[this.state.sortBy] ? 1 : -1
      );
    } else {
      players.sort((a, b) =>
        a[this.state.sortBy] > b[this.state.sortBy] ? -1 : 1
      );
    }

    const playerCount = players.length;

    return (
      <React.Fragment>
        <Header
          playerCount={playerCount}
          tournamentInfo={tournamentInfo}
          searchPlayer={this.state.searchPlayer}
          tournaments={this.props.tournaments}
          includesAdjusted={this.state.includesAdjusted}
          includesMissedCut={this.state.includesMissedCut}
          handleTournamentsChange={this.props.handleTournamentsChange}
          handleSearchPlayer={this.handleSearchPlayer}
          handleIncludesMissedCutChange={this.handleIncludesMissedCutChange}
          handleIncludesAdjustedChange={this.handleIncludesAdjustedChange}
        />
        <List
          players={players}
          details={this.state.details}
          sortBy={this.state.sortBy}
          handleSortByChange={this.handleSortByChange}
          handlePlayerClick={this.props.handlePlayerClick}
        />
      </React.Fragment>
    );
  }
}

export default Body;
