import React, { Component } from "react";

const cards = [1, 2, 3, 4, 5, 6];

class Roster extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {cards.map((card) => (
          <div className="card mb-3 shadow">
            <div className="card-body">
              <h5>Dustin Johnson</h5>
              <p>$11,600</p>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Roster;
