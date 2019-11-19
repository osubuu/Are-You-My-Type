const animations = {
  // REMOVE ANIMATION 1: BECOMING SMALLER
  shrinkWord: word => {
    word.animate(
      { fontSize: "25%", opacity: "-=1" },
      { duration: 1000, queue: false }
    );
  },
  // REMOVE ANIMATION 2: HORIZONTALLY SPACING OUT
  spaceOutWord: word => {
    word.animate(
      { width: "200%", letterSpacing: "100px", opacity: "-=1" },
      { duration: 1000, queue: false }
    );
  },
  // REMOVE ANIMATION 3: JQUERY UI PUFFING
  puffWord: word => {
    word.effect("puff");
  },
  // REMOVE ANIMATION 4: ERASER EFFECT
  eraseWord: word => {
    const erase = function () {
      word.text(word.text().substr(0, word.text().length - 1));

      if (word.text().length > 0) {
        setTimeout(erase, 50);
      }
    };
    erase();
  },
  // ADD ANIMATION: TYPEWRITER
  typewriter: (className, speed) => {
    const word = $(className).text();
    let i = 1;

    const typeOut = setInterval(function () {
      if (i > word.length) {
        clearInterval(typeOut);
      }

      $(className).text(word.substr(0, i));
      $(className).css("visibility", "visible");

      i++;
    }, speed);
  },
  // BLINK WORD GREEN BEFORE FADING TO WHITE
  blinkWord: word => {
    word.css("color", "#7df289");
    word.animate(
      { color: "white" },
      { duration: 500, queue: false }
    );
  },
  // REMOVE WORD ELEMENT IF USER TYPES IT SUCCESSFULLY
  removeElement: word => {
    animations.blinkWord(word);

    const randomRemoval = utils.getRandomInteger(4);
    if (randomRemoval === 0) {
      animations.shrinkWord(word);
    } else if (randomRemoval === 1) {
      animations.spaceOutWord(word);
    } else if (randomRemoval === 2) {
      animations.puffWord(word);
    } else if (randomRemoval === 3) {
      animations.eraseWord(word);
    }
    setTimeout(function () {
      word.remove();
    }, 1000);
  },
};
