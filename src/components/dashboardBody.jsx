import React, { Component } from "react";
import RankTable from "./rankTable";
import RankBubble from "./rankBubble";
import DetailTable from "./detailTable";
import DetailLine from "./detailLine";
const axios = require("axios").default;

class DashboardBody extends Component {
  constructor(props) {
    super(props);
    this.handlePlayerClick = this.handlePlayerClick.bind(this);
    this.handleAddComparePlayer = this.handleAddComparePlayer.bind(this);
    this.handleRemoveComparePlayer = this.handleRemoveComparePlayer.bind(this);
    this.handleSearchPlayer = this.handleSearchPlayer.bind(this);
    this.handleTournamentChange = this.handleTournamentChange.bind(this);
    this.state = {
      players: [],
      details: [],
      activePlayer: {},
      pendingPlayer: {},
      comparePlayers: [],
      searchPlayer: "",
      tournaments: 3,
    };
  }

  handlePlayerClick(activePlayer) {
    const comparePlayerExistsArray = this.state.comparePlayers.filter((obj) => {
      return obj.DKPlayerID === activePlayer.DKPlayerID;
    });
    const pendingPlayer =
      comparePlayerExistsArray.length > 0 ? {} : activePlayer;
    this.setState({
      activePlayer: activePlayer,
      pendingPlayer: pendingPlayer,
    });
  }
  handleAddComparePlayer(comparePlayer) {
    const comparePlayers = this.state.comparePlayers;
    comparePlayers.unshift(comparePlayer);
    this.setState({
      pendingPlayer: {},
      comparePlayers: comparePlayers,
    });
  }
  handleRemoveComparePlayer(removePlayer) {
    const comparePlayers = this.state.comparePlayers.filter((obj) => {
      return obj.DKPlayerID !== removePlayer.DKPlayerID;
    });
    if (removePlayer.DKPlayerID === this.state.activePlayer.DKPlayerID) {
      this.setState({
        pendingPlayer: removePlayer,
        comparePlayers: comparePlayers,
      });
    } else {
      this.setState({
        comparePlayers: comparePlayers,
      });
    }
  }
  handleSearchPlayer(searchPlayer) {
    this.setState({ searchPlayer: searchPlayer });
  }
  handleTournamentChange(tournaments) {
    const defaultPlayer = this.state.players.filter((player) => {
      return (
        player.Rating === 100 && player.NumberOfTournaments === tournaments
      );
    });
    this.setState({
      tournaments: tournaments,
      activePlayer: defaultPlayer[0],
      pendingPlayer: defaultPlayer[0],
    });
  }

  async callAPI() {
    const rankingsURL = "http://localhost:9000/GetPlayerRankings";
    const detailsURL = "http://localhost:9000/GetPlayerRankingDetails";
    const players = await axios.get(rankingsURL);
    const details = await axios.get(detailsURL);
    const defaultPlayer = players.data.filter((player) => {
      return player.Rating === 100 && player.NumberOfTournaments === 3;
    });
    this.setState({
      players: players.data,
      details: details.data,
      activePlayer: defaultPlayer[0],
      pendingPlayer: defaultPlayer[0],
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    //rankTable
    const playersByTournaments = this.state.players.filter((player) => {
      return player.NumberOfTournaments === this.state.tournaments;
    });
    const players = playersByTournaments.filter((player) => {
      const playerFullName =
        player.FirstName.toLowerCase() + " " + player.LastName.toLowerCase();
      const searchPlayer = this.state.searchPlayer.toLowerCase();
      return playerFullName.search(searchPlayer) > -1;
    });

    //rankBubble
    const playersBubble = playersByTournaments.sort((a, b) =>
      a.Salary > b.Salary ? -1 : 1
    );

    //detailsTable
    const activePlayerId =
      this.state.activePlayer == null ? 0 : this.state.activePlayer.DKPlayerID;
    const details = this.state.details.filter((obj) => {
      return obj.DKPlayerID === activePlayerId;
    });
    details.forEach((obj) => {
      const d = new Date(obj.StartDate);
      obj.StartDate = d.toLocaleDateString("en-US", {
        dateStyle: "short",
      });
    });

    //detailsLine
    const compareAndPendingPlayers = [...this.state.comparePlayers];
    compareAndPendingPlayers.push(this.state.pendingPlayer);
    const detailsLine = [];
    compareAndPendingPlayers.forEach((player) => {
      const compareAndPendingPlayerDetails = this.state.details.filter(
        (obj) => {
          return (
            obj.DKPlayerID === player.DKPlayerID &&
            obj.TournamentOrder <= this.state.tournaments
          );
        }
      );
      detailsLine.push.apply(detailsLine, compareAndPendingPlayerDetails);
    });
    const detailsLineTransform = [];
    var maxTournaments = 0;
    detailsLine.forEach((detail) => {
      const currentMaxTournament = detail.TournamentOrder;
      if (currentMaxTournament > maxTournaments) {
        maxTournaments = currentMaxTournament;
      }
    });
    for (let i = 1; i <= maxTournaments; i++) {
      const playersInTournament = detailsLine.filter((obj) => {
        return obj.TournamentOrder === i;
      });
      const tournamentObject = {
        tournamentOrder: i,
      };
      playersInTournament.forEach((player) => {
        const playerShortName = player.ShortName;
        tournamentObject[playerShortName] = player.FinishPositionCalc;
      });
      detailsLineTransform.unshift(tournamentObject);
    }

    return (
      <React.Fragment>
        <div className="row h-50">
          <div className="Col col-md-7 h-100">
            <RankTable
              players={players}
              handlePlayerClick={this.handlePlayerClick}
              handleSearchPlayer={this.handleSearchPlayer}
              searchPlayer={this.state.searchPlayer}
              handleTournamentChange={this.handleTournamentChange}
              activePlayerId={activePlayerId}
            />
          </div>
          <div className="Col col-md-5 h-100">
            <RankBubble
              playersBubble={playersBubble}
              activePlayerId={activePlayerId}
              handlePlayerClick={this.handlePlayerClick}
            />
          </div>
        </div>
        <div className="row h-50">
          <div className="Col col-md-7 h-100">
            <DetailTable
              activePlayer={this.state.activePlayer}
              details={details}
              pendingPlayer={this.state.pendingPlayer}
              comparePlayers={this.state.comparePlayers}
              handleAddComparePlayer={this.handleAddComparePlayer}
              handleRemoveComparePlayer={this.handleRemoveComparePlayer}
              handlePlayerClick={this.handlePlayerClick}
              tournaments={this.state.tournaments}
            />
          </div>
          <div className="Col col-md-5 h-100">
            <DetailLine
              detailsLineTransform={detailsLineTransform}
              activePlayer={this.state.activePlayer}
              comparePlayers={this.state.comparePlayers}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardBody;
