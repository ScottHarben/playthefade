import React from "react";
import { CheckIcon } from "@primer/octicons-react";

function DetailColumns(tournaments) {
  return [
    {
      name: "Date",
      selector: "StartDate",
      cell: (item) => (item.StartDate == "12/31/69" ? "" : item.StartDate),
      minWidth: "100px",
    },
    {
      name: "",
      selector: "",
      center: true,
      minWidth: "10px",
      compact: true,
      cell: (item) =>
        item.TournamentOrder <= tournaments ? <CheckIcon /> : "",
    },
    {
      name: "Tournament",
      selector: "TournamentName",
      grow: 2,
    },
    {
      name: "Finish",
      selector: "Finish",
      center: true,
      minWidth: "25px",
      compact: true,
    },
    {
      name: "R1",
      selector: "Round1",
      center: true,
      minWidth: "10px",
      compact: true,
    },
    {
      name: "R2",
      selector: "Round2",
      center: true,
      minWidth: "10px",
      compact: true,
    },
    {
      name: "R3",
      selector: "Round3",
      center: true,
      minWidth: "10px",
      compact: true,
    },
    {
      name: "R4",
      selector: "Round4",
      center: true,
      minWidth: "10px",
      compact: true,
    },
  ];
}

export default DetailColumns;
