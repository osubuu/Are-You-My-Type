const utils = {
  // GET RANDOM INTEGER BETWEEN 0 AND GIVEN INTEGER NUMBER INPUT
  getRandomInteger: number => {
    return Math.floor(Math.random() * number);
  },
  // GET SCORE OF WORD DEPENDING ON ITS CHARACTER LENGTH
  getWordScore: word => {
    if (word.length <= 5) {
      return 50;
    } else if (word.length <= 8) {
      return 100;
    } else if (word.length <= 12) {
      return 150;
    } else if (word.length > 12) {
      return 200;
    }
  },
};
