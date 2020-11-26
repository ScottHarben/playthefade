import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "fontsource-roboto";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Modal from "react-bootstrap/Modal";
import ModalPlayerBody from "./components/modalPlayerBody";
import ModalMetricInfoBody from "./components/modalMetricInfoBody";
import Icon from "./components/icon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayerClick = this.handlePlayerClick.bind(this);
    this.handleTournamentsChange = this.handleTournamentsChange.bind(this);
    this.handleMetricInfoClick = this.handleMetricInfoClick.bind(this);
    this.state = {
      modalPlayerOpen: false,
      modalMetricInfoOpen: false,
      activePlayer: {},
      activePlayerDetails: [],
      tournaments: 5,
    };
  }
  handlePlayerClick(activePlayer, activePlayerDetails) {
    this.setState({
      modalPlayerOpen: !this.state.modalPlayerOpen,
      activePlayer: activePlayer,
      activePlayerDetails: activePlayerDetails,
    });
  }
  handleMetricInfoClick() {
    this.setState({
      modalMetricInfoOpen: !this.state.modalMetricInfoOpen,
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
          tournaments={this.state.tournaments}
          handlePlayerClick={this.handlePlayerClick}
          handleMetricInfoClick={this.handleMetricInfoClick}
          handleTournamentsChange={this.handleTournamentsChange}
        />
        <Modal
          centered
          show={this.state.modalPlayerOpen}
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
        <Modal
          show={this.state.modalMetricInfoOpen}
          onHide={this.handleMetricInfoClick}
        >
          <Modal.Body>
            <ModalMetricInfoBody
              handleMetricInfoClick={this.handleMetricInfoClick}
            />
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default App;
