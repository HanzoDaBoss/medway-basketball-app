function gradeConverter(playerList) {
  const grades = {
    100: "A+",
    95: "A",
    90: "A-",
    85: "B+",
    82: "B",
    79: "B-",
    74: "C+",
    72: "C",
    69: "C-",
    66: "D+",
    62: "D",
    58: "D-",
  };

  playerList.map((player) => {
    Object.keys(player).forEach((attribute, index) => {
      if (index > 1 || index < 10) {
        player[attribute] = grades[attribute];
      }
    });
    return player;
  });
}
