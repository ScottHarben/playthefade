function RankColumns() {
  return [
    {
      name: "Player",
      selector: "FirstName",
      cell: (item) => item.FirstName + " " + item.LastName,
      sortable: true,
    },
    {
      name: "Salary",
      selector: "Salary",
      sortable: true,
    },
    {
      name: "Rating",
      selector: "Rating",
      sortable: true,
    },
    {
      name: "Value",
      selector: "Value",
      sortable: true,
    },
    {
      name: "Volitility",
      selector: "Volitility",
      sortable: true,
      sortFunction: (a, b) => a.VolitilityRank - b.VolitilityRank,
    },
    {
      name: "Trend",
      selector: "Trend",
      sortable: true,
    },
  ];
}

export default RankColumns;
