import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "fontsource-roboto";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Modal from "react-bootstrap/Modal";
import ModalPlayerBody from "./components/modalPlayerBody";
import Icon from "./components/icon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayerClick = this.handlePlayerClick.bind(this);
    this.handleTournamentsChange = this.handleTournamentsChange.bind(this);
    this.state = {
      modalOpen: false,
      activePlayer: {},
      activePlayerDetails: [],
      tournaments: 5,
    };
  }
  handlePlayerClick(activePlayer, activePlayerDetails) {
    this.setState({
      modalOpen: !this.state.modalOpen,
      activePlayer: activePlayer,
      activePlayerDetails: activePlayerDetails,
    });
  }
  handleTournamentsChange(tournaments) {
    this.setState({ tournaments: tournaments });
  }
  render() {
    const activePlayerName =
      this.state.activePlayer === undefined
        ? ""
        : this.state.activePlayer.FirstName +
          " " +
          this.state.activePlayer.LastName;
    const activePlayerDetails =
      this.state.activePlayerDetails === undefined
        ? []
        : this.state.activePlayerDetails;
    return (
      <React.Fragment>
        <Navbar />
        <Body
          handlePlayerClick={this.handlePlayerClick}
          handleTournamentsChange={this.handleTournamentsChange}
          tournaments={this.state.tournaments}
        />
        <Modal
          centered
          show={this.state.modalOpen}
          onHide={this.handlePlayerClick}
        >
          <Modal.Header>
            <Modal.Title>{activePlayerName}</Modal.Title>
            <div
              className="h-100 mt-1"
              style={{ cursor: "pointer" }}
              onClick={() => this.handlePlayerClick()}
            >
              <Icon icon={"xicon"} className="align-middle" />
            </div>
          </Modal.Header>
          <Modal.Body className="pt-0 px-0">
            <ModalPlayerBody
              activePlayerDetails={activePlayerDetails}
              tournaments={this.state.tournaments}
            />
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default App;
