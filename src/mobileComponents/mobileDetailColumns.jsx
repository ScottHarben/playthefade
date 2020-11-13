import React from "react";

function MobileDetailColumns() {
  return [
    {
      name: "Start Date",
      selector: "StartDate",
      cell: (item) => (item.StartDate == "12/31/69" ? "" : item.StartDate),
      compact: true,
      minWidth: "25px",
    },
    {
      name: "Tournament",
      selector: "TournamentName",
      compact: true,
      grow: 2,
      minWidth: "25px",
    },
    {
      name: "Finish",
      selector: "Finish",
      center: true,
      compact: true,
      minWidth: "25px",
    },
  ];
}

export default MobileDetailColumns;
