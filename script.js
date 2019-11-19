/* NAMESPACE */
const gameApp = {};

/* ======================
  GLOBAL VARIABLES
  ======================= */
gameApp.listOfWords = [...words]
gameApp.score = 0;
gameApp.wordsTyped = 0;
gameApp.wordCounter = 1;
gameApp.timerStart = 60;
gameApp.startTime = 0;
gameApp.endTime = 0;
gameApp.winningScoreThreshold = 2500;
gameApp.loseCondition = 10;
gameApp.wordGenerationSpeed = 1500;
gameApp.currentWordsPositions = [];
gameApp.gameOver = false;

/* ======================
  A. INTRODUCTION SLIDES
  ======================= */

/* A1. SHOW RULES FUNCTION */
gameApp.showRules = function () {
  // Display intro text
  setTimeout(function () {
    $(".blink-text").removeClass();
  }, 1750);
  setTimeout(function () {
    animations.typewriter(".welcome", 40);
  }, 1750);
  setTimeout(function () {
    animations.typewriter(".author", 40);
  }, 3000);
  setTimeout(function () {
    animations.typewriter(".read-rules", 40);
  }, 3000);

  // Listen for ENTER to continue
  $(document).on("keypress", function (event) {
    if (event.which === 13 && $(".intro-title").is(":visible")) {
      // Display welcome
      $(".intro-title").slideUp(500);
      $(".intro-rules")
        .delay(500)
        .fadeIn();

      // Go to start game event handler
      gameApp.startGame();
    }
  });
};

/* A2. START GAME FUNCTION (i.e initiate the generatation of words) */
gameApp.startGame = function () {
  // Display rules
  setTimeout(function () {
    animations.typewriter(".rules-title", 40);
    animations.typewriter(".win-title", 40);
    animations.typewriter(".lose-title", 40);
  }, 750);
  setTimeout(function () {
    animations.typewriter(".rule-1", 20);
    animations.typewriter(".rule-2", 20);
    animations.typewriter(".rule-3", 20);
    animations.typewriter(".win-1", 20);
    animations.typewriter(".lose-1", 20);
    animations.typewriter(".lose-2", 20);
    animations.typewriter(".game-start", 40);
  }, 1250);

  // Listen for ENTER to continue
  $(document).one("keypress", function (event) {
    if (event.which === 13 && $(".intro-rules").is(":visible")) {
      // Prepare the gaming background
      $(".intro").slideUp(500);
      $(".score")
        .find(".metric")
        .text(gameApp.score);
      $(".timer")
        .find(".metric")
        .text(gameApp.timerStart);
      $(".score, .timer, .user-input").fadeIn();
      $(".bg-top, .bg-bottom")
        .css("display", "flex")
        .hide()
        .fadeIn();

      // Get the starting time stamp
      gameApp.startTime = new Date();

      // Start the game
      setTimeout(function () {
        gameApp.generateWords();
      }, 350);

      // Clear any previous word input and turn focus to input box
      $("input").val("");
      $(".user-input").focus();
    }
  });
};

/* ======================
  B. MAIN GAME FUNCTIONALITIES
  ======================= */

/* B1. MAIN FUNCTION THAT GENERATES WORDS AND
CHECKS FOR WIN/LOSE CONDITIONS */
gameApp.generateWords = () => {
  gameApp.countDown(gameApp.timerStart);
  const game = setInterval(function () {
    // WIN CONDITION
    if (gameApp.score >= gameApp.winningScoreThreshold) {
      // Stop the game
      gameApp.gameOver = true;
      clearInterval(game);
      gameApp.playAgain();

      // Calculate duration and typing rate
      gameApp.endTime = new Date();
      const averageTypingSecond = (gameApp.wordsTyped / ((gameApp.endTime - gameApp.startTime) / 1000)).toFixed(2);
      const averageTypingMinute = Math.floor(averageTypingSecond * 60);

      // Put ending stats on DOM
      $(".ending-number-of-words").text(gameApp.wordsTyped);
      $(".ending-average-typing-second").text(averageTypingSecond);
      $(".ending-average-typing-minute").text(averageTypingMinute);
      $(".ending, .ending-win").css("display", "flex");

      // Display ending messages
      setTimeout(function () {
        animations.typewriter(".ending-win-title", 50);
        animations.typewriter(".ending-win-msg", 50);
        $(".stat-container").addClass("spin");
        animations.typewriter(".ending-number-of-words", 125);
        animations.typewriter(".ending-average-typing-second", 125);
        animations.typewriter(".ending-average-typing-minute", 125);
        animations.typewriter(".ending-win .reset", 25);
      }, 300);
    }

    // Calculate number of words on screen
    const wordsOnScreen = $(".word").length;

    // LOSE CONDITION
    if (wordsOnScreen > gameApp.loseCondition) {
      // Stop the game
      gameApp.gameOver = true;
      gameApp.playAgain();
      clearInterval(game);

      // Display losing messages
      setTimeout(function () {
        animations.typewriter(".ending-lose-title", 50);
        animations.typewriter(".ending-sorry", 25);
        animations.typewriter(".ending-lose .reset", 25);
      }, 300);
      $(".ending, .ending-lose").css("display", "flex");
    }

    // Pick random word from array and remove it from array
    const randomWordPosition = utils.getRandomInteger(gameApp.listOfWords.length);
    const randomWord = gameApp.listOfWords[randomWordPosition];
    gameApp.listOfWords.splice(randomWordPosition, 1);

    // Calculate random positions
    const wordXPosition = `${utils.getRandomInteger(90)}%`;
    const WordYPosition = `${utils.getRandomInteger(73) + 12}%`;

    // Display word on screen at random location
    const wordId = `word-${gameApp.wordCounter}`;
    $(".words").append(`<h3 class="word" id="${wordId}">${randomWord}</h3>`);
    $(`#${wordId}`).css({
      bottom: WordYPosition,
      left: wordXPosition,
      visibility: "hidden"
    });

    // Check if new word is overlapping with one of the current words
    gameApp.detectCollision($(`#${wordId}`));

    // increment word counter for next random word id
    gameApp.wordCounter++;
  }, gameApp.wordGenerationSpeed);
};

/* B2. FUNCTION TO LISTEN FOR USER INPUT */
gameApp.getInput = function () {
  $("input").on("input", function () {
    // get user word
    const userWord = $("input")
      .val()
      .trim();

    // make an object of current words on screen
    const currentWords = $(".word");

    // loop through this object to see if user input matches any of the current words
    let match = false;
    for (let i = 0; i < currentWords.length; i++) {
      const word = currentWords[i];

      // if input word matches with any word on screen
      if (word.innerText === userWord) {
        match = true;
        $(".user-input").effect(
          "highlight",
          {
            color: "#a7efae"
          },
          300
        );
        // remove word from screen
        animations.removeElement($(`#${word.id}`));

        // increment score
        gameApp.score += utils.getWordScore(word.innerText);
        gameApp.wordsTyped++;
        $(".score")
          .find("span")
          .text(gameApp.score);

        // clear input field
        $("input").val("");
      }
    }
  });
};

/* B3. COLLISION DETECTION FUNCTION TO CHECK IF
ANY OF THE CURRENT WORDS ARE OVERLAPPING WITH NEW WORD*/
gameApp.detectCollision = function (word) {
  let collision = false;
  const top = word.position().top;
  const left = word.position().left;
  const width = word.width();
  const height = word.height();
  const right = left + width;
  const bottom = top + height;
  const positions = { top: top, left: left, right: right, bottom: bottom };

  // if this is the first word, no collision possible so
  // just add to array of words on screen and display it
  if (gameApp.currentWordsPositions.length === 0) {
    gameApp.currentWordsPositions.push(positions);
    word
      .css({ visibility: "visible" })
      .hide()
      .fadeIn();
  } else {
    // compare newly generated word's position to every words' positions on the screen

    for (let i = 0; i < gameApp.currentWordsPositions.length; i++) {
      const currentTop = gameApp.currentWordsPositions[i].top;
      const currentBot = gameApp.currentWordsPositions[i].bottom;
      const currentLeft = gameApp.currentWordsPositions[i].left;
      const currentRight = gameApp.currentWordsPositions[i].right;

      // if the new word's width is smaller or equal than the width of the current word to be compared to
      if (width <= currentRight - currentLeft) {
        // collision condition for smaller word
        if (
          ((top >= currentTop && top <= currentBot) || (bottom <= currentBot && bottom >= currentTop)) &&
          ((left >= currentLeft && left <= currentRight) || (right <= currentRight && right >= currentLeft))
        ) {
          // assign new position to word if collusion is detected
          // and call the collision function again to check if new position is valid
          const newXPosition = `${utils.getRandomInteger(90)}%`;
          const newYPosition = `${utils.getRandomInteger(73) + 12}%`;
          word.css({
            bottom: newYPosition,
            left: newXPosition,
            visibility: "hidden"
          });
          // check if newly reassigned word collides with any words
          collision = true;
          gameApp.detectCollision(word);
        }
      }
      // if the new word's width is larger than the width of the current word to be compared to
      else if (width > currentRight - currentLeft) {
        // collision condition for larger words
        if (
          ((top >= currentTop && top <= currentBot) || (bottom <= currentBot && bottom >= currentTop)) &&
          ((left >= currentLeft && left <= currentRight) ||
            (right <= currentRight && right >= currentLeft) ||
            (left <= currentLeft && right >= currentRight))
        ) {
          const newXPosition = `${utils.getRandomInteger(90)}%`;
          const newYPosition = `${utils.getRandomInteger(73) + 12}%`;
          word.css({
            bottom: newYPosition,
            left: newXPosition,
            visibility: "hidden"
          });
          // check if newly reassigned word collides with any words
          collision = true;
          gameApp.detectCollision(word);
        }
      }
    }
    // if no collision, add newly generated word into array of all words on screen and show the word on screen
    if (collision === false) {
      gameApp.currentWordsPositions.push(positions);
      word
        .css({ visibility: "visible" })
        .hide()
        .fadeIn();
    }
  }
};

/* B4. TIMER COUNTDOWN FUNCTION */
gameApp.countDown = function (startTime) {
  let remainingTime = startTime;
  const timer = setInterval(function () {
    if (gameApp.gameOver === true) {
      clearInterval(timer);
    }
    remainingTime--;
    $(".timer")
      .find("span")
      .text(remainingTime);
  }, 1000);
};

/* B5. CLEAR WORD IN INPUT BOX ON SUBMIT  */
gameApp.clearWord = function () {
  $("form").on("submit", function (event) {
    event.preventDefault();
    $("input").val("");
  });
};

/* ======================
  C. ENDING SLIDE
  ======================= */

/* C1. PLAY AGAIN EVENT LISTENER */
gameApp.playAgain = function () {
  $(document).on("keypress", function (event) {
    if (event.which === 13 && $(".reset").is(":visible")) {
      window.location.reload();
    }
  });
};

/* ======================
  INIT FUNCTION
  ======================= */
gameApp.init = function () {
  gameApp.showRules();
  gameApp.getInput();
  gameApp.clearWord();
};

/* JQUERY DOC READY */
$(function () {
  gameApp.init();
});
