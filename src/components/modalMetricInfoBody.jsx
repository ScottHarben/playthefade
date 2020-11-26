import React, { Component } from "react";
import Icon from "./icon";

class ModalMetricInfoBody extends Component {
  state = {};
  handleMetricInfoClick() {
    this.props.handleMetricInfoClick();
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="h-100 mt-1 d-flex flex-row-reverse"
          style={{ cursor: "pointer" }}
          onClick={() => this.handleMetricInfoClick()}
        >
          <Icon icon={"xicon"} className="align-middle" />
        </div>

        <h5>Rating</h5>
        <h5>
          <small className="text-muted">A value between 0 and 100</small>
        </h5>
        <p>
          <small>
            Players recieve points for each tournament based on the player's
            finishing position, number of players in the field, and the strength
            of field. The player's points are averaged based on the number of
            previous tournaments selected and normalized between 0 and 100. 100
            is the highest Rating a player can recieve.
          </small>
        </p>
        <h5 className="mt-5">Value</h5>
        <h5>
          <small className="text-muted">A value above or below 100</small>
        </h5>
        <p>
          <small>
            A player's Value is a funtion of their rating and salary. Fair
            market Value for a player is 100. A player with a Value over 100 is
            considered to be a good Value.
          </small>
        </p>
        <h5 className="mt-5">Volitility</h5>
        <h5>
          <small className="text-muted">A value from 1 to 5</small>
        </h5>
        <p>
          <small>
            Volitlity is the dispersion of a player's finishing positions
            compared the other players in the upcoming field. A Volitility of 1
            indicates the player's finishing positions are relatively consistent
            compared to the other players in the upcoming field.
          </small>
        </p>
        <h5 className="mt-5">Trending</h5>
        <h5>
          <small className="text-muted">A value from -1 to 1</small>
        </h5>
        <p>
          <small>
            The Trending value is an indication of the direction of the player's
            finishing positions. Values close to -1 and 1 indicate the player is
            consistently finishing worse or better, respectively. 0 indicates no
            trend.
          </small>
        </p>
        <h5 className="mt-5">Salary</h5>
        <h5>
          <small className="text-muted">
            Player salary from DraftKings Fantasy Golf: Classic{" "}
          </small>
        </h5>
        <p>
          <small>
            In{" "}
            <a href="https://www.draftkings.com" target="_blank">
              DraftKings
            </a>{" "}
            Fantasy Golf: Classic, teams are drafted by selecting 6 players
            while staying under the $50,000 salary cap.
          </small>
        </p>
      </React.Fragment>
    );
  }
}

export default ModalMetricInfoBody;
