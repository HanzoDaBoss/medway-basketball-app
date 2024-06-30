function gradeConverter(playerList) {
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

  playerList.map((player) => {
    Object.values(player).forEach((attribute, index) => {
      if (index > 1 || index < 10) {
      }
    });
  });
}
