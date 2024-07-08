function ovrCalculator(player) {
  let sum = 0;

  Object.values(player).forEach((value, index) => {
    if (index > 0 && index < 9) {
      sum += value;
    }
  });

  sum /= 8;
  sum *= player.multiplier;

  return Math.round(sum);
}

const testData = {
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
};

export {ovrCalculator};
