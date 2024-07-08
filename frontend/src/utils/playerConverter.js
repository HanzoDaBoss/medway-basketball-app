function gradeConverter(player) {
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

  Object.entries(player).forEach(([attribute, value], index) => {
    if (index > 0 && index < 9) {
      player[value] = grades[attribute];
    }
  });
}

const testData = {
  playerName: "Omor",
  insideScoring: "A",
  midRangeShooting: "A",
  longRangeShooting: "B",
  perimeterDefense: "A-",
  insideDefense: "A",
  playmaking: "A",
  rebound: "A",
  ballHandling: "A-",
  multiplier: 1,
};

export {gradeConverter};
