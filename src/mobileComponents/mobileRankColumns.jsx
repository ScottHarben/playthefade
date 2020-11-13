function RankColumns() {
  return [
    {
      name: "Player",
      selector: "FirstName",
      cell: (item) => item.FirstName[0] + ". " + item.LastName,
      sortable: true,
      compact: true,
      grow: 3,
    },
    {
      name: "Salary",
      selector: "Salary",
      sortable: true,
      compact: true,
      minWidth: "25px",
    },
    {
      name: "Rating",
      selector: "Rating",
      sortable: true,
      compact: true,
      minWidth: "25px",
    },
    {
      name: "Value",
      selector: "Value",
      sortable: true,
      compact: true,
      minWidth: "25px",
    },
    {
      name: "Volitility",
      selector: "VolitilityRank",
      sortable: true,
      compact: true,
      minWidth: "25px",
    },
    {
      name: "Trend",
      selector: "Trend",
      sortable: true,
      compact: true,
      minWidth: "25px",
      hide: "sm",
    },
  ];
}

export default RankColumns;
