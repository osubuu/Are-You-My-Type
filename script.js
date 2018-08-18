const gameApp = {};

gameApp.listOfWords = [
  "abject",
  "aberration",
  "abjure",
  "abnegation",
  "abrogate",
  "abscond",
  "abstruse",
  "accede",
  "accost",
  "accretion",
  "acumen",
  "adamant",
  "admonish",
  "adumbrate",
  "adverse",
  "advocate",
  "affluent",
  "aggrandize",
  "alacrity",
  "alias",
  "ambivalent",
  "amenable",
  "amorphous",
  "anachronistic",
  "anathema",
  "annex",
  "antediluvian",
  "antiseptic",
  "apathetic",
  "antithesis",
  "apocryphal",
  "approbation",
  "arbitrary",
  "arboreal",
  "arcane",
  "archetypal",
  "arrogate",
  "ascetic",
  "aspersion",
  "assiduous",
  "atrophy",
  "bane",
  "bashful",
  "beguile",
  "bereft",
  "blandishment",
  "bilk",
  "bombastic",
  "cajole",
  "callous",
  "calumny",
  "camaraderie",
  "candor",
  "capitulate",
  "carouse",
  "carp",
  "caucus",
  "cavort",
  "circumlocution",
  "circumscribe",
  "circumvent",
  "clamor",
  "cleave",
  "cobbler",
  "cogent",
  "cognizant",
  "commensurate",
  "complement",
  "compunction",
  "concomitant",
  "conduit",
  "conflagration",
  "congruity",
  "connive",
  "consign",
  "constituent",
  "construe",
  "contusion",
  "contrite",
  "contentious",
  "contravene",
  "convivial",
  "corpulence",
  "covet",
  "cupidity",
  "dearth",
  "debacle",
  "debauch",
  "debunk",
  "defunct",
  "demagogue",
  "denigrate",
  "derivative",
  "despot",
  "diaphanous",
  "didactic",
  "dirge",
  "disaffected",
  "discomfit",
  "disparate",
  "dispel",
  "disrepute",
  "divisive",
  "dogmatic",
  "dour",
  "duplicity",
  "duress",
  "eclectic",
  "edict",
  "ebullient",
  "egregious",
  "elegy",
  "elicit",
  "embezzlement",
  "emend",
  "emollient",
  "empirical",
  "emulate",
  "enervate",
  "enfranchise",
  "engender",
  "ephemeral",
  "epistolary",
  "equanimity",
  "equivocal",
  "espouse",
  "evanescent",
  "evince",
  "exacerbate",
  "exhort",
  "execrable",
  "exigent",
  "expedient",
  "expiate",
  "expunge",
  "extraneous",
  "extol",
  "extant",
  "expurgate",
  "fallacious",
  "fatuous",
  "fetter",
  "flagrant",
  "foil",
  "forbearance",
  "fortuitous",
  "fractious",
  "garrulous",
  "gourmand",
  "grandiloquent",
  "gratuitous",
  "hapless",
  "hegemony",
  "heterogenous",
  "iconoclast",
  "idiosyncratic",
  "impecunious",
  "impetuous",
  "impinge",
  "impute",
  "inane",
  "inchoate",
  "incontrovertible",
  "incumbent",
  "inexorable",
  "inimical",
  "injunction",
  "inoculate",
  "insidious",
  "instigate",
  "insurgent",
  "interlocutor",
  "intimation",
  "inure",
  "invective",
  "intransigent",
  "inveterate",
  "irreverence",
  "knell",
  "laconic",
  "largesse",
  "legerdemain",
  "libertarian",
  "licentious",
  "linchpin",
  "litigant",
  "maelstrom",
  "maudlin",
  "maverick",
  "mawkish",
  "maxim",
  "mendacious",
  "modicum",
  "morass",
  "mores",
  "munificent",
  "multifarious",
  "nadir",
  "negligent",
  "neophyte",
  "noisome",
  "noxious",
  "obdurate",
  "obfuscate",
  "obstreperous",
  "officious",
  "onerous",
  "ostensible",
  "ostracism",
  "palliate",
  "panacea",
  "paradigm",
  "pariah",
  "partisan",
  "paucity",
  "pejorative",
  "pellucid",
  "penchant",
  "penurious",
  "pert",
  "pernicious",
  "pertinacious",
  "phlegmatic",
  "philanthropic",
  "pithy",
  "platitude",
  "plaudit",
  "plenitude",
  "plethora",
  "portent",
  "potentate",
  "preclude",
  "predilection",
  "preponderance",
  "presage",
  "probity",
  "proclivity",
  "profligate",
  "promulgate",
  "proscribe",
  "protean",
  "prurient",
  "puerile",
  "pugnacious",
  "pulchritude",
  "punctilious",
  "quaint",
  "quixotic",
  "quandary",
  "recalcitrant",
  "redoubtable",
  "relegate",
  "remiss",
  "reprieve",
  "reprobate",
  "rescind",
  "requisition",
  "rife",
  "sanctimonious",
  "sanguine",
  "scurrilous",
  "semaphore",
  "serendipity",
  "sobriety",
  "solicitous",
  "solipsism",
  "spurious",
  "staid",
  "stolid",
  "subjugate",
  "surfeit",
  "surreptitious",
  "swarthy",
  "tangential",
  "tome",
  "toady",
  "torpid",
  "travesty",
  "trenchant",
  "trite",
  "truculent",
  "turpitude",
  "ubiquitous",
  "umbrage",
  "upbraid",
  "utilitarian",
  "veracity",
  "vestige",
  "vicissitude",
  "vilify",
  "virtuoso",
  "vitriolic",
  "vituperate",
  "vociferous",
  "wanton",
  "winsome",
  "yoke",
  "zephyr",
  "wily",
  "tirade"
];
/* ======================
  GENERAL FUNCTIONS
  ======================= */

// TYPEWRITER EFFECT
gameApp.typeWriter = (className, speed) => {
  const word = $(className).text();
  let i = 1;

  let typeOut = setInterval(function() {
    if (i > word.length) {
      clearInterval(typeOut);
    }

    $(className).text(word.substr(0, i));
    $(className).css("visibility", "visible");

    i++;
  }, speed);
};

// RANDOMIZE
gameApp.random = length => {
  return Math.floor(Math.random() * length);
};

// ASSIGN SCORES TO EACH WORD
gameApp.wordScore = word => {
  if (word.length <= 5) {
    return 50;
  } else if (word.length <= 8) {
    return 100;
  } else if (word.length <= 12) {
    return 150;
  } else if (word.length > 12) {
    return 200;
  }
};

// REMOVE WORD WHEN USER CORRECTLY TYPES IN
gameApp.removeElement = word => {
  word.css("color", "#7df289");
  word.animate({ color: "white" }, { duration: 500, queue: false });

  let randomRemoval = gameApp.random(4);

  if (randomRemoval === 0) {
    gameApp.smallWordRemoval(word);
  } else if (randomRemoval === 1) {
    gameApp.letterSpacingRemoval(word);
  } else if (randomRemoval === 2) {
    gameApp.puffRemoval(word);
  } else if (randomRemoval === 3) {
    gameApp.eraserRemoval(word);
  }
  setTimeout(function() {
    word.remove();
  }, 1000);
};

// REMOVE WORD BY BECOMING SMALLER
gameApp.smallWordRemoval = word => {
  word.animate(
    { fontSize: "25%", opacity: "-=1" },
    { duration: 1000, queue: false }
  );
};

// REMOVE WORD BY SPACING OUT
gameApp.letterSpacingRemoval = word => {
  word.animate(
    { width: "200%", letterSpacing: "100px", opacity: "-=1" },
    { duration: 1000, queue: false }
  );
};

// REMOVE WORD BY PUFFING
gameApp.puffRemoval = word => {
  word.effect("puff");
};

// REMOVE WORD WORD BY ERASER EFFECT
gameApp.eraserRemoval = word => {
  let erase = function() {
    word.text(word.text().substr(0, word.text().length - 1));

    if (word.text().length > 0) {
      setTimeout(erase, 50);
    }
  };
  erase();
};

gameApp.generateWords = () => {
  gameApp.countDown(gameApp.timerStart);
  let game = setInterval(function() {
    // WIN CONDITION
    if (gameApp.score >= gameApp.winningScoreThreshold) {
      gameApp.gameOver = true;
      gameApp.playAgain();
      clearInterval(game);
      gameApp.endTime = new Date();
      let averageTypingSecond = (
        gameApp.wordsTyped /
        ((gameApp.endTime - gameApp.startTime) / 1000)
      ).toFixed(2);
      let averageTypingMinute = Math.floor(averageTypingSecond * 60);

      // Display ending stats
      $(".ending-number-of-words").text(gameApp.wordsTyped);
      $(".ending-average-typing-second").text(averageTypingSecond);
      $(".ending-average-typing-minute").text(averageTypingMinute);
      $(".ending, .ending-win").css("display", "flex");

      setTimeout(function() {
        gameApp.typeWriter(".ending-win-title", 50);
        gameApp.typeWriter(".ending-win-msg", 50);
        $(".stat-container").addClass("spin");
        gameApp.typeWriter(".ending-number-of-words", 125);
        gameApp.typeWriter(".ending-average-typing-second", 125);
        gameApp.typeWriter(".ending-average-typing-minute", 125);
        gameApp.typeWriter(".ending-win .reset", 25);
      }, 300);
    }

    let wordsOnScreen = $(".word").length;

    // LOSE CONDITION
    if (wordsOnScreen > gameApp.loseCondition) {
      gameApp.gameOver = true;
      setTimeout(function() {
        gameApp.typeWriter(".ending-lose-title", 50);
        gameApp.typeWriter(".ending-sorry", 25);
        gameApp.typeWriter(".ending-lose .reset", 25);
      }, 300);
      gameApp.playAgain();
      clearInterval(game);
      $(".ending, .ending-lose").css("display", "flex");
    }

    // Pick random word from array and remove it from array
    let randomWordPosition = gameApp.random(gameApp.listOfWords.length);
    let randomWord = gameApp.listOfWords[randomWordPosition];
    gameApp.listOfWords.splice(randomWordPosition, 1);

    // Calculate random positions
    let wordXPosition = `${gameApp.random(90)}%`;
    let WordYPosition = `${gameApp.random(80) + 10}%`;

    // Display word on screen at random location
    let wordId = `word-${gameApp.wordCounter}`;
    $(".words").append(`<h3 class="word" id="${wordId}">${randomWord}</h3>`);
    $(`#${wordId}`).css({
      bottom: WordYPosition,
      left: wordXPosition,
      visibility: "hidden"
    });
    gameApp.detectCollision($(`#${wordId}`));

    // increment word counter for next random word id
    gameApp.wordCounter++;
  }, gameApp.wordGenerationSpeed);
};

// Collision Detection to minimize words overlapping with each other
gameApp.detectCollision = function(word) {
  let top = word.position().top;
  let left = word.position().left;
  let width = word.width();
  let height = word.height();
  let right = left + width;
  let bottom = top + height;
  let positions = { top: top, left: left, right: right, bottom: bottom };

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
      let currentTop = gameApp.currentWordsPositions[i].top;
      let currentBot = gameApp.currentWordsPositions[i].bottom;
      let currentLeft = gameApp.currentWordsPositions[i].left;
      let currentRight = gameApp.currentWordsPositions[i].right;

      if (
        ((top > currentTop && top < currentBot) ||
          (bottom < currentBot && bottom > currentTop)) &&
        ((left > currentLeft && left < currentRight) ||
          (right < currentRight && right > currentLeft))
      ) {
        // assign new position to word if collusion is detected
        // and call the collision function again to check if new position is valid
        let newXPosition = `${gameApp.random(90)}%`;
        let newYPosition = `${gameApp.random(80) + 10}%`;
        word.css({
          bottom: newYPosition,
          left: newXPosition,
          visibility: "hidden"
        });
        gameApp.detectCollision(word);
      }
    }
    // if no collision, add newly generated word into array of all words on screen
    // and show the word on screen
    gameApp.currentWordsPositions.push(positions);
    word
      .css({ visibility: "visible" })
      .hide()
      .fadeIn();
  }
};

gameApp.score = 0;
gameApp.wordsTyped = 0;
gameApp.wordCounter = 1;
gameApp.timerStart = 60;
gameApp.startTime = 0;
gameApp.endTime = 0;
gameApp.winningScoreThreshold = 500;
gameApp.loseCondition = 5;
gameApp.wordGenerationSpeed = 1500;
gameApp.currentWordsPositions = [];
gameApp.gameOver = false;

gameApp.clearWord = function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    $("input").val("");
  });
};

/* ======================
  GET USER INPUT AND COMPARE TO CURRENT WORDS
  ======================= */
gameApp.getInput = function() {
  $("input").on("input", function() {
    // get user word
    let userWord = $("input")
      .val()
      .trim();

    // make an object of current words on screen
    let currentWords = $(".word");

    // loop through this object to see if user input matches any of the current words
    let match = false;
    for (let i = 0; i < currentWords.length; i++) {
      let word = currentWords[i];
      if (word.innerText === userWord) {
        match = true;
        $(".user-input").effect(
          "highlight",
          {
            color: "#a7efae"
          },
          300
        );
        gameApp.wordsTyped++;
        gameApp.removeElement($(`#${word.id}`));
        gameApp.score += gameApp.wordScore(word.innerText);
        $(".score")
          .find("span")
          .text(gameApp.score);
        $("input").val("");
      }
    }
  });
};

/* ======================
  INTRODUCTION SLIDES
  ======================= */

/* SHOW RULES  */
gameApp.showRules = function() {
  setTimeout(function() {
    $(".blink-text").removeClass();
  }, 1750);
  setTimeout(function() {
    gameApp.typeWriter(".welcome", 40);
  }, 1750);
  setTimeout(function() {
    gameApp.typeWriter(".author", 40);
  }, 3000);
  setTimeout(function() {
    gameApp.typeWriter(".read-rules", 40);
  }, 3000);

  $(document).on("keypress", function(event) {
    if (event.which === 13 && $(".intro-title").is(":visible")) {
      $(".intro-title").slideUp(500);
      $(".intro-rules")
        .delay(500)
        .fadeIn();
      gameApp.startGame();
    }
  });
};

/* START GAME (i.e generate words) */
gameApp.startGame = function() {
  setTimeout(function() {
    gameApp.typeWriter(".rules-title", 40);
    gameApp.typeWriter(".win-title", 40);
    gameApp.typeWriter(".lose-title", 40);
  }, 750);
  setTimeout(function() {
    gameApp.typeWriter(".rule-1", 20);
    gameApp.typeWriter(".rule-2", 20);
    gameApp.typeWriter(".rule-3", 20);
    gameApp.typeWriter(".win-1", 20);
    gameApp.typeWriter(".lose-1", 20);
    gameApp.typeWriter(".lose-2", 20);
    gameApp.typeWriter(".game-start", 40);
  }, 1250);

  $(document).one("keypress", function(event) {
    if (event.which === 13 && $(".intro-rules").is(":visible")) {
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
      gameApp.startTime = new Date();
      setTimeout(function() {
        gameApp.generateWords();
      }, 350);
      $("input").val("");
      $(".user-input").focus();
    }
  });
};

gameApp.playAgain = function() {
  $(document).on("keypress", function(event) {
    if (event.which === 13 && $(".reset").is(":visible")) {
      window.location.reload();
    }
  });
};

gameApp.countDown = function(startTime) {
  let remainingTime = startTime;
  let timer = setInterval(function() {
    if (gameApp.gameOver === true) {
      clearInterval(timer);
    }
    remainingTime--;
    $(".timer")
      .find("span")
      .text(remainingTime);
  }, 1000);
};

/* ======================
  INIT FUNCTION
  ======================= */
gameApp.init = function() {
  gameApp.showRules();
  gameApp.getInput();
  gameApp.clearWord();
};

/* JQUERY DOC READY */
$(function() {
  gameApp.init();
});
