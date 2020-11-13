import React, { Component } from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Scatter,
  Cell,
} from "recharts";
import DefaultTooltipContent from "recharts/lib/component/DefaultTooltipContent";

class RankBubble extends Component {
  handlePlayerClick(activePlayer) {
    this.props.handlePlayerClick(activePlayer);
  }

  render() {
    const playersBubbleWithZeroRating = this.props.playersBubble;
    const playersBubble = playersBubbleWithZeroRating.filter((player) => {
      return player.Rating !== 0;
    });

    const CustomTooltip = (props) => {
      if (props.payload[0] != null) {
        const newPayload = [
          {
            name: "Name",
            value: props.payload[0].payload.ShortName,
          },
          {
            name: "Salary",
            value: props.payload[0].payload.Salary,
          },
          {
            name: "Rating",
            value: props.payload[0].payload.Rating,
          },
          {
            name: "Value",
            value: props.payload[0].payload.Value,
          },
        ];
        return <DefaultTooltipContent {...props} payload={newPayload} />;
      }
      return <DefaultTooltipContent {...props} />;
    };

    return (
      <div className="card h-100 shadow-sm">
        <div className="card-body h-100 overflow-auto">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="Salary"
                name="Salary"
                label={{
                  value: "Salary",
                  offset: -15,
                  position: "insideBottom",
                }}
              />
              <YAxis
                dataKey="Rating"
                name="Rating"
                label={{ value: "Rating", angle: -90, position: "insideLeft" }}
              />
              <ZAxis
                dataKey="StandardDeviation"
                range={[250, 50]}
                name="Standard Deviation"
              />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                isAnimationActive={false}
                content={<CustomTooltip />}
              />
              <Scatter
                name="Player"
                data={playersBubble}
                onClick={(rowData) => this.handlePlayerClick(rowData)}
              >
                {playersBubble.map((player, index) =>
                  player.DKPlayerID === this.props.activePlayerId ? (
                    <Cell
                      key={`cell-${index}`}
                      fill={"#FF6347"}
                      cursor={"pointer"}
                    />
                  ) : (
                    <Cell
                      key={`cell-${index}`}
                      fill={"#007bff"}
                      cursor={"pointer"}
                    />
                  )
                )}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default RankBubble;
