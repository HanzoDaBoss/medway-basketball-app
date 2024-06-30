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

  return playerList.map((player) => {
    Object.entries(player).forEach(([attribute, value], index) => {
      if (index > 1 && index < 10) {
        player[attribute] = grades[value];
      }
    });
    console.log(player);
    return player;
  });
}

const testData = [
  {
    id: 1,
    playerName: "Omor",
    insideScoring: 95,
    midRangeShooting: 95,
    longRangeShooting: 82,
    perimeterDefense: 90,
    insideDefense: 95,
    playmaking: 95,
    rebound: 95,
    ballHandling: 90,
    multiplier: 1,
    overallRating: 92.125,
  },
  {
    id: 2,
    playerName: "Rahat",
    insideScoring: 85,
    midRangeShooting: 74,
    longRangeShooting: 58,
    perimeterDefense: 90,
    insideDefense: 85,
    playmaking: 90,
    rebound: 85,
    ballHandling: 82,
    multiplier: 1.04,
    overallRating: 84.37,
  },
];

gradeConverter(testData);
