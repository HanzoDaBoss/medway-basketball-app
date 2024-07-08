function playerConverter(player) {
  const grades = {
    "A+": 100,
    A: 95,
    "A-": 90,
    "B+": 85,
    B: 82,
    "B-": 79,
    "C+": 74,
    C: 72,
    "C-": 69,
    "D+": 66,
    D: 62,
    "D-": 58,
  };
  const playerCopy = JSON.parse(JSON.stringify(player));
  Object.entries(playerCopy).forEach(([attribute, value], index) => {
    if (index > 0 && index < 9) {
      playerCopy[attribute] = grades[value];
    }
  });

  return playerCopy;
}

const testData = {
  playerName: " Mr Test",
  insideScoring: "A+",
  midRangeShooting: "A",
  longRangeShooting: "A-",
  perimeterDefense: "B-",
  insideDefense: "C+",
  playmaking: "D",
  rebound: "D+",
  ballHandling: "D-",
  multiplier: 1.24,
};

export {playerConverter};
