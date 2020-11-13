import React, { Component } from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { ArrowRightIcon } from "@primer/octicons-react";

class DetailLine extends Component {
  state = {};

  render() {
    const comparePlayers = this.props.comparePlayers;
    const activePlayer = this.props.activePlayer;
    const compareLessActivePlayers = comparePlayers.filter((player) => {
      return player.DKPlayerID !== activePlayer.DKPlayerID;
    });
    const colors = ["#007bff", "#28a745", "#ffc107", "#17a2b8", "#6c757d"];
    return (
      <div className="card h-100 shadow-sm">
        <div className="card-body h-100 overflow-auto">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={this.props.detailsLineTransform}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="TournamentOrder"
                label={{
                  value: "Most Recent",
                  offset: 5,
                  position: "insideBottomRight",
                }}
              />
              <YAxis
                label={{ value: "Finish", angle: -90, position: "insideLeft" }}
              />
              <Tooltip isAnimationActive={false} />
              <Legend iconType="plainline" />
              <Line
                type="monotone"
                dataKey={activePlayer.ShortName}
                stroke="#FF6347"
                dot={false}
              />
              {compareLessActivePlayers.map((player, index) => (
                <Line
                  type="monotone"
                  dataKey={player.ShortName}
                  stroke={colors[index]}
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default DetailLine;
