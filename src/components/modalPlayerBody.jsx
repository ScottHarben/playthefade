import React, { Component } from "react";
import Icon from "./icon";

class ModalPlayerBody extends Component {
  state = {};
  render() {
    return (
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-light">
          <div className="row">
            <div className="col-1 px-0"></div>
            <div className="col-2 px-0 text-center">
              <small>R1</small>
            </div>
            <div className="col-2 px-0 text-center">
              <small>R2</small>
            </div>
            <div className="col-2 px-0 text-center">
              <small>R3</small>
            </div>
            <div className="col-2 px-0 text-center">
              <small>R3</small>
            </div>
            <div className="col-1 px-0"></div>
            <div className="col-2 text-right">
              <small>Finish</small>
            </div>
          </div>
        </li>
        {this.props.activePlayerDetails.map((detail) => {
          return (
            <li
              key={detail.DKPlayerID + "-" + detail.TournamentOrder}
              className="list-group-item"
            >
              <div className="row">
                <div className="col-1 text-right px-0">
                  <small className="" style={{ fontSize: "10px" }}>
                    {new Date(detail.StartDate).toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </small>
                </div>
                <div
                  className="col-8 text-nowrap"
                  style={{
                    overflowY: "hidden",
                    overflowClipBox: "content-box",
                  }}
                >
                  <small>{detail.TournamentName}</small>
                </div>
                <div className="col-1 text-right px-0">
                  {detail.TournamentOrder <= this.props.tournaments ? (
                    <div style={{ color: "#F9AA33" }}>
                      <Icon icon={"check"} />
                    </div>
                  ) : (
                    <React.Fragment />
                  )}
                </div>
                <div className="col-2 text-right">
                  <small>{detail.Finish}</small>
                </div>
              </div>
              <div className="row">
                <div className="col-1 px-0 text-center"></div>
                <div
                  className="col-2 px-0 text-center"
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderRightColor: "#eeeeee",
                  }}
                >
                  <small>{detail.Round1}</small>
                </div>
                <div
                  className="col-2 px-0 text-center"
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderRightColor: "#eeeeee",
                  }}
                >
                  <small>{detail.Round2}</small>
                </div>
                <div
                  className="col-2 px-0 text-center"
                  style={{
                    borderRightStyle: "solid",
                    borderRightWidth: "1px",
                    borderRightColor: "#eeeeee",
                  }}
                >
                  <small>{detail.Round3}</small>
                </div>
                <div className="col-2 px-0 text-center">
                  <small>{detail.Round4}</small>
                </div>
                <div className="col-1 px-0 text-center"></div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ModalPlayerBody;
