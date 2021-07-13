class MemoryGame {
  constructor() {
    this.gameContainer = document.getElementById('gameContainer');
    this.timeElement = document.querySelector('#time span');
    this.names = ['naruto', 'sakura', 'sasuke', 'itachi', 'kakashi'];
    this.memoryNames = [];
    this.clicks = 0;
    this.currentTime = 0;
    this.score = 0;
    this.timeId = '';
    this.difficulty = 'easy';
    this.playerName = 'player01';
    this.rank = '';
    this.celebrateMessage = '';

    this.rank_easy = document.getElementById('rank-easy');
    this.rank_medium = document.getElementById('rank-medium');
    this.rank_hard = document.getElementById('rank-hard');

    this.overlay = document.getElementById('overlay');
    this.gameLeaderboards = document.getElementById('gameLeaderboards');

    this.fightingSpirit = new Audio('./assets/bgm/fighting-spirit.mp3');
    this.victoryBGM = new Audio('./assets/bgm/victory.mp3');
    this.setFightingSpiritProperty();

    this.gameLeaderboards.onclick = () => {
      this.overlay.classList.remove('hide');
      this.updateLeaderBoard();
    };
  }

  displayRankData(difficulty) {
    const retrieve = this.retrieveFromLocalStorage;

    this[`rank_${difficulty}`].innerHTML = `
      <div class="first">
        <img
        class="first-img"
        src="./assets/images/Hokage_hat.png"
        alt="hokage hat"/>
        ${
          retrieve(difficulty, 'first')
            ? `<p>${retrieve(difficulty, 'first').time} seconds</p>`
            : ''
        }
      </div>
      <div class="second">
        <img
        class="second-img"
        src="assets/images/jonin.png"
        alt="jonin symbol"/>
        ${
          retrieve(difficulty, 'second')
            ? `<p>${retrieve(difficulty, 'second').time} seconds</p>`
            : ''
        }
      </div>
      <div class="third">
        <img
        class="third"
        src="assets/images/chunin.png"
        alt="chunin symbol"/> 
        ${
          retrieve(difficulty, 'third')
            ? `<p>${retrieve(difficulty, 'third').time} seconds</p>`
            : ''
        }
      </div>
      ${
        retrieve(difficulty, 'first')
          ? `<p class="first">${retrieve(difficulty, 'first').playerName}</p>`
          : ''
      }
      ${
        retrieve(difficulty, 'second')
          ? `<p class="second">${retrieve(difficulty, 'second').playerName}</p>`
          : ''
      }
      ${
        retrieve(difficulty, 'third')
          ? `<p class="third">${retrieve(difficulty, 'third').playerName}</p>`
          : ''
      }
    `;
  }

  // calls the displayRankData()
  updateLeaderBoard() {
    this.displayRankData('easy');
    this.displayRankData('medium');
    this.displayRankData('hard');
  }

  // this changes the volume=0.1 and loop=true of game BGM
  setFightingSpiritProperty() {
    this.fightingSpirit.volume = 0.1;
    this.fightingSpirit.loop = true;
  }

  // changes the difficulty
  setDifficulty(difficulty) {
    this.difficulty = difficulty;
    localStorage.setItem(
      'difficulty',
      JSON.stringify({ difficulty: `${difficulty}` })
    );
  }

  // will return the current difficulty
  getDifficulty() {
    if (localStorage.getItem('difficulty')) {
      this.difficulty = JSON.parse(
        localStorage.getItem('difficulty')
      ).difficulty;
    }
    return this.difficulty;
  }

  // copies the names twice into memoryNames
  makeCopies() {
    const names_2 = ['gaara', 'hinata', 'neji', 'shikamaru', 'kiba'];
    const names_3 = ['madara', 'obito', 'pain', 'minato', 'bee'];

    switch (this.getDifficulty()) {
      case 'easy':
        this.gameContainer.classList.add('easy');
        break;
      case 'medium':
        this.gameContainer.classList.add('medium');
        names_2.forEach((name) => this.names.push(name));
        break;
      case 'hard':
        this.gameContainer.classList.add('hard');
        names_2.forEach((name) => this.names.push(name));
        names_3.forEach((name) => this.names.push(name));
        break;
    }

    for (let i = 0; i < 2; i++) {
      this.names.forEach((name) => this.memoryNames.push(name));
    }
  }

  // will increase currentTime by t value
  increaseTime(t) {
    this.currentTime += t;
    this.timeElement.textContent = this.currentTime;
  }

  // calls increaTime()
  setTime() {
    setTimeout(() => {
      this.timeId = setInterval(() => {
        this.increaseTime(1);
      }, 1000);
    }, 6000);
  }

  // returns the currentTime
  getTime() {
    return this.currentTime;
  }

  // stops the timer
  stopTime() {
    clearInterval(this.timeId);
  }

  // empties the gameContainer
  cleanGameContainer() {
    this.gameContainer.innerHTML = '';
  }

  //   hides the card
  hideCard(card1, card2) {
    card1.classList.add('hide');
    card2.classList.add('hide');
  }

  // checks if there's a class called clicked
  checkForClickClass(card) {
    return card.classList.contains('clicked');
  }

  // shows the front side of the card
  showFrontSide(card) {
    card.src = `./assets/images/${card.alt}.jpg`;
  }

  // shows the back side of the card
  showBackSide(card) {
    card.src = `./assets/images/back-side.jpg`;
  }

  // increases score by 1
  increaseScore() {
    this.score++;
  }

  // adds the class slideIn to the gameContainer
  gameSlideIn() {
    this.gameContainer.classList.add('slideIn');
  }

  // removes the class slideIn to the gameContainer
  gameSlideOut() {
    this.gameContainer.classList.remove('slideIn');
  }

  // changes the rank based on the argument given
  changeRank(rank) {
    this.rank = rank;
  }

  // returns the rank variable value
  getRank() {
    return this.rank;
  }

  // adds a p message to the winning message when the player is in the top 3
  changeCelebrateMessage() {
    this.fightingSpirit.muted = true;
    this.victoryBGM.muted = false;
    this.victoryBGM.currentTime = 0;
    this.victoryBGM.loop = true;
    this.victoryBGM.play();
    this.victoryBGM.volume = 0.5;
    this.celebrateMessage = `<p class="celebrate-message">You earned ${this.getRank()} place!!!</p>`;
  }

  // records data to localstorage
  recordToLocalStorage(playerName, time, difficulty, rank) {
    localStorage.setItem(
      `${difficulty}_${rank}`,
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  // gets data from localstorage
  retrieveFromLocalStorage(difficulty, rank) {
    return JSON.parse(localStorage.getItem(`${difficulty}_${rank}`));
  }

  // replaces the current place holder with the challenger
  replaceRank(rankToReplace, currentRank) {
    const current = this.retrieveFromLocalStorage(this.difficulty, currentRank);

    if (!current) {
      return;
    }
    return this.recordToLocalStorage(
      current.playerName,
      current.time,
      this.difficulty,
      rankToReplace
    );
  }

  // replaces the current rank holder with the challenger
  replaceWithChallenger(rank) {
    this.changeRank(rank);
    this.changeCelebrateMessage();
    return this.recordToLocalStorage(
      this.getPlayerName(),
      this.getTime(),
      this.difficulty,
      rank
    );
  }

  // handles cases when when the leaderboard rank position is not empty
  handlePlacementSwitch(rank) {
    switch (rank) {
      case 'first':
        this.replaceRank('third', 'second');
        this.replaceRank('second', 'first');
        this.replaceWithChallenger(rank);
        break;
      case 'second':
        this.replaceRank('third', 'second');
        this.replaceWithChallenger(rank);
        break;
      case 'third':
        this.replaceWithChallenger(rank);
        break;
    }
  }

  // main rank controller
  handlePlacement(currentLeader, rank) {
    if (!currentLeader) {
      this.replaceWithChallenger(rank);
      return true;
    }
    if (this.currentTime < currentLeader.time) {
      this.handlePlacementSwitch(rank);
      return true;
    }
    return false;
  }

  // runs handlePlacement() and stops when handlePlacement returns true
  handleRank(currentFirstPlace, currentSecondPlace, currentThirdPlace) {
    if (this.handlePlacement(currentFirstPlace, 'first')) {
      return;
    }
    if (this.handlePlacement(currentSecondPlace, 'second')) {
      return;
    }
    if (this.handlePlacement(currentThirdPlace, 'third')) {
      return;
    }
  }

  // calls the handleRank()
  setRank() {
    const currentFirstPlace = this.retrieveFromLocalStorage(
      this.difficulty,
      'first'
    );
    const currentSecondPlace = this.retrieveFromLocalStorage(
      this.difficulty,
      'second'
    );
    const currentThirdPlace = this.retrieveFromLocalStorage(
      this.difficulty,
      'third'
    );

    this.handleRank(currentFirstPlace, currentSecondPlace, currentThirdPlace);
  }

  resetRadioStyle(difficultyRadios) {
    difficultyRadios.forEach((radio) => {
      radio.classList.remove('active');
    });
  }

  radioHandler(radio, difficultyRadios) {
    if (this.difficulty === radio.value) {
      radio.classList.add('active');
    }
    radio.onclick = () => {
      this.resetRadioStyle(difficultyRadios);
      this.setDifficulty(radio.value);
      radio.classList.add('active');
    };
  }

  addListenerToDifficultyChanger() {
    const difficultyRadios = this.gameContainer.querySelectorAll(
      '#difficultyGroupInGame input'
    );
    difficultyRadios.forEach((radio) =>
      this.radioHandler(radio, difficultyRadios)
    );
  }

  insertDifficultyChanger() {
    const difficultyChanger = `
      <div class="difficultyGroupInGame" id="difficultyGroupInGame">
        <input type="radio" id="easyInGame" value="easy" name="difficulty" />
        <label for="easyInGame"
          ><img
            class="kunai"
            src="./assets/images/kunai.png"
            alt="kunai"
          />Easy</label
        >
        <input type="radio" id="mediumInGame" value="medium" name="difficulty" />
        <label for="mediumInGame"
          ><img
            class="kunai"
            src="./assets/images/kunai.png"
            alt="kunai"
          />Medium</label
        >
        <input type="radio" id="hardInGame" value="hard" name="difficulty" />
        <label for="hardInGame"
          ><img
            class="kunai"
            src="./assets/images/kunai.png"
            alt="kunai"
          />Hard</label
        >
      </div>    
    `;

    return difficultyChanger;
  }

  // returns an template literal which contains the winningMessage HTML
  getMessageHTML() {
    const message = `
      <h1>Mission Complete</h1>
      <p>Time: ${this.currentTime} seconds</p>
      <p class="difficulty">Difficulty: <span class="${this.difficulty}">${
      this.difficulty
    }</p></p>
      ${this.rank ? this.celebrateMessage : ''}
      <button id="play-again" class="play-again">Play Again</button>
      ${this.insertDifficultyChanger()}
    `;
    return message;
  }

  resetValues() {
    this.currentTime = 0;
    this.score = 0;
    this.names = ['naruto', 'sakura', 'sasuke', 'itachi', 'kakashi'];
    this.memoryNames = [];
  }

  resetGrid() {
    this.gameContainer.classList.remove('easy');
    this.gameContainer.classList.remove('medium');
    this.gameContainer.classList.remove('hard');
    this.gameContainer.classList.remove('victory');
  }

  playAgainClickHandler() {
    this.yell();
    this.cleanGameContainer();
    this.resetGrid();
    this.resetValues();
    this.runGame(this.playerName);
    this.victoryBGM.muted = true;
    this.fightingSpirit.muted = false;
    this.fightingSpirit.currentTime = 0;
  }

  // puts the winningMessage into the screeen
  displayMessage(winningMessage) {
    setTimeout(() => {
      this.gameContainer.appendChild(winningMessage);
      this.gameSlideIn();

      const playAgain = document.getElementById('play-again');
      playAgain.onclick = () => {
        this.playAgainClickHandler();
      };
      this.addListenerToDifficultyChanger();
    }, 1500);
  }

  // used to make the fadeIn effect of the text in the winningMessage
  showText(winningMessage) {
    setTimeout(() => {
      winningMessage.classList.add('showText');
    }, 3000);
  }

  // creates a winning Mesage
  createWinningMessage() {
    const winningMessage = document.createElement('div');
    winningMessage.classList.add('winningMessage');
    winningMessage.innerHTML = this.getMessageHTML();
    return winningMessage;
  }

  // this is used for grid template handling
  removeDifficultyClassesAndAddVictoryToGameContainer() {
    this.gameContainer.classList.remove('easy');
    this.gameContainer.classList.remove('medium');
    this.gameContainer.classList.remove('hard');
    this.gameContainer.classList.add('victory');
  }

  // defines the winningMessage and calls displayMessage() and showText()
  displayWinningMessage() {
    this.setRank();

    const winningMessage = this.createWinningMessage();

    this.gameSlideOut();

    this.removeDifficultyClassesAndAddVictoryToGameContainer();
    this.displayMessage(winningMessage);

    this.showText(winningMessage);
  }

  // adds throw class into the kunais
  throw(kunai1, kunai2) {
    setTimeout(() => {
      kunai1.classList.add('throw');
      kunai2.classList.add('throw');
    }, 10);
  }

  // plays the sfx of a kunai hitting
  playThrowKunaiSound() {
    const knifeSound = new Audio('./assets/sfx/kunai-hit.mp3');
    setTimeout(() => {
      knifeSound.play();
    }, 300);
  }

  // adds the kunais into the gameContainer
  appendKunaiToGameContainer(kunai1, kunai2) {
    this.gameContainer.appendChild(kunai1);
    this.gameContainer.appendChild(kunai2);
  }

  // makes the kunai element
  createKunai(card) {
    const kunai1 = document.createElement('img');
    kunai1.classList.add('throwing-kunai');
    kunai1.style.top = `${
      card.getBoundingClientRect().top -
      this.gameContainer.getBoundingClientRect().top
    }px`;
    kunai1.style.left = `${
      card.getBoundingClientRect().left -
      this.gameContainer.getBoundingClientRect().left
    }px`;
    return kunai1;
  }

  // main throwKunai controller
  throwKunai(card1, card2) {
    const kunai1 = this.createKunai(card1);
    const kunai2 = this.createKunai(card2);

    this.appendKunaiToGameContainer(kunai1, kunai2);

    this.throw(kunai1, kunai2);

    this.playThrowKunaiSound();
  }

  // adds preventClick class
  preventClick(card1, card2) {
    card1.classList.add('preventClick');
    card2.classList.add('preventClick');
  }

  // removes preventClick class
  removeClickClasss(card1, card2) {
    card1.classList.remove('clicked');
    card2.classList.remove('clicked');
  }

  // main Match controller
  executeMatchActions(card1, card2) {
    this.preventClick(card1, card2);
    this.throwKunai(card1, card2);
    setTimeout(() => this.hideCard(card1, card2), 1500);
    this.increaseScore();
    if (this.score == this.memoryNames.length / 2) {
      this.stopTime();
      setTimeout(() => {
        this.cleanGameContainer();
        this.displayWinningMessage();
      }, 2000);
    }
  }

  // main misMatch controller
  executeMismatchActions(card1, card2) {
    setTimeout(() => {
      this.showBackSide(card1);
      this.showBackSide(card2);
    }, 1000);
  }

  //   checks if card1 is the same as card2
  cardsMatchHandler(card1, card2) {
    if (card1.alt == card2.alt) {
      this.executeMatchActions(card1, card2);
    } else {
      this.executeMismatchActions(card1, card2);
    }
    this.removeClickClasss(card1, card2);
  }

  // increases clicks by 1
  increaseClicks() {
    this.clicks++;
  }

  // resets clicks to 0
  resetClicks() {
    this.clicks = 0;
  }

  // main controller when two cards are clicked
  handleTwoCardsClickedEvent() {
    if (this.clicks == 2) {
      const cards = document.querySelectorAll('.card-image');
      // convert cards from nodelist to array
      const cardsArray = Array.from(cards);

      const clickedCards = cardsArray.filter(this.checkForClickClass);

      const [card1, card2] = clickedCards;
      this.cardsMatchHandler(card1, card2);

      this.resetClicks();
    }
  }

  // show the backside of the card when clicked again
  handleClickSelf(event) {
    if (event.target.classList.contains('clicked')) {
      event.target.classList.remove('clicked');
      this.showBackSide(event.target);
      this.resetClicks();
      return true;
    }
    return false;
  }

  // main click handler
  cardClickHandler(event) {
    this.showFrontSide(event.target);
    // remove clicked class if the user clicked the same thing also reset the click to 0
    if (this.handleClickSelf(event)) {
      return;
    }

    event.target.classList.add('clicked');

    this.increaseClicks();

    this.handleTwoCardsClickedEvent();
  }

  // displays the cards on the screen
  createCards() {
    this.memoryNames.forEach((name) => {
      const card = document.createElement('img');
      card.classList.add('card-image');
      card.alt = name;
      this.showFrontSide(card);
      card.classList.add('preventClick');
      setTimeout(() => card.classList.remove('preventClick'), 6000);
      setTimeout(() => this.showBackSide(card), 6000);
      card.style.order = Math.floor(Math.random() * 10);
      card.onclick = () => this.cardClickHandler(event);
      card.ondragstart = () => false;
      this.gameContainer.appendChild(card);
    });
  }

  // changes this.playerName
  setPlayerName(playerName) {
    this.playerName = playerName;
    localStorage.setItem(
      'playerName',
      JSON.stringify({ playerName: `${playerName}` })
    );
  }

  // returns this.playerName
  // when there is playerName in the localstorage, use that instead
  getPlayerName() {
    if (localStorage.getItem('playerName')) {
      this.playerName = JSON.parse(
        localStorage.getItem('playerName')
      ).playerName;
    }
    return this.playerName;
  }

  // plays the yellSFX
  yell() {
    const yellSFX = [
      new Audio('./assets/sfx/rasengan.mp3'),
      new Audio('./assets/sfx/shinra-tensei.mp3'),
      new Audio('./assets/sfx/kamui.mp3'),
    ];

    return yellSFX[Math.floor(Math.random() * yellSFX.length)].play();
  }

  // starts the game
  runGame(playerName) {
    this.setPlayerName(playerName);
    this.makeCopies();
    this.createCards();
    this.gameSlideIn();
    this.setTime();
  }
}

class Welcome {
  constructor() {
    this.welcomeWindow = document.getElementById('welcomeWindow');
    this.playNowBtn = document.getElementById('play-now');
    this.difficultyRadios = document.querySelectorAll('#difficultyGroup input');
    this.bodyMarginTop = 0;
    this.leaderboards = document.getElementById('leaderboards');
    this.overlay = document.getElementById('overlay');
    this.closeBtn = document.getElementById('closeBtn');
    this.playerID = document.getElementById('playerID');
    this.changeName = document.getElementById('changeName');
    this.rank_easy = document.getElementById('rank-easy');
    this.rank_medium = document.getElementById('rank-medium');
    this.rank_hard = document.getElementById('rank-hard');
    this.rowLabels = document.querySelectorAll('.overlay__difficulty p');
    this.easyData = document.getElementById('rank-easy');
    this.mediumData = document.getElementById('rank-medium');
    this.hardData = document.getElementById('rank-hard');
    this.leaderData = document.querySelectorAll('#leaderData div');
    this.newGame = new MemoryGame();
    this.difficulty = this.newGame.getDifficulty();

    this.playerID.textContent = this.newGame.getPlayerName();

    this.setHandlers();

    this.updateLeaderBoard();
  }

  // adds click events to the rowLabels
  setHandlers() {
    this.rowLabels.forEach(
      (rowLabel) =>
        (rowLabel.onclick = () => this.rowLabelClickHandler(rowLabel))
    );

    this.difficultyRadios.forEach((radio) => this.radioHandler(radio));

    this.playNowBtn.onclick = (e) => this.playNowBtnClickHandler(e);

    this.leaderboards.onclick = () => this.openOverlay();

    this.closeBtn.onclick = () => this.closeOverlay();

    this.playerID.onclick = () => this.changeNameClickHandler();

    this.changeName.onclick = () => this.changeNameClickHandler();
  }

  // handles events when rowLabel(easy, medium, hard on the leaderboards) is clicked
  rowLabelClickHandler(rowLabel) {
    this.rowLabels.forEach((row) => row.classList.remove('active'));
    this.leaderData.forEach((data) => data.classList.remove('show'));
    switch (rowLabel.textContent) {
      case 'Easy':
        this.easyData.classList.add('show');
        break;
      case 'Medium':
        this.mediumData.classList.add('show');
        break;
      case 'Hard':
        this.hardData.classList.add('show');
        break;
    }
    rowLabel.classList.add('active');
  }

  // displays the vertical bars, rowlabels and, playerName and time into the leaderboards
  displayRankData(difficulty) {
    const retrieve = this.newGame.retrieveFromLocalStorage;

    this[`rank_${difficulty}`].innerHTML = `
      <div class="first">
        <img
        class="first-img"
        src="./assets/images/Hokage_hat.png"
        alt="hokage hat"/>
        ${
          retrieve(difficulty, 'first')
            ? `<p>${retrieve(difficulty, 'first').time} seconds</p>`
            : ''
        }
      </div>
      <div class="second">
        <img
        class="second-img"
        src="assets/images/jonin.png"
        alt="jonin symbol"/>
        ${
          retrieve(difficulty, 'second')
            ? `<p>${retrieve(difficulty, 'second').time} seconds</p>`
            : ''
        }
      </div>
      <div class="third">
        <img
        class="third"
        src="assets/images/chunin.png"
        alt="chunin symbol"/> 
        ${
          retrieve(difficulty, 'third')
            ? `<p>${retrieve(difficulty, 'third').time} seconds</p>`
            : ''
        }
      </div>
      ${
        retrieve(difficulty, 'first')
          ? `<p class="first">${retrieve(difficulty, 'first').playerName}</p>`
          : ''
      }
      ${
        retrieve(difficulty, 'second')
          ? `<p class="second">${retrieve(difficulty, 'second').playerName}</p>`
          : ''
      }
      ${
        retrieve(difficulty, 'third')
          ? `<p class="third">${retrieve(difficulty, 'third').playerName}</p>`
          : ''
      }
    `;
  }

  // calls the displayRankData()
  updateLeaderBoard() {
    this.displayRankData('easy');
    this.displayRankData('medium');
    this.displayRankData('hard');
  }

  // alert if name is empty or greater than 15 characters
  isNameValid(playerName) {
    if (!playerName) {
      alert('Error. Empty Name');
      return false;
    }
    if (playerName.length > 15) {
      alert('Name should not exceed 15 characters.');
      this.changeNameClickHandler();
      return false;
    }
    return true;
  }

  // used when the Change Name button is clicked
  changeNameClickHandler() {
    const playerName = prompt('Enter Player Name');
    const isValid = this.isNameValid(playerName);
    if (!isValid) {
      return;
    }

    this.newGame.setPlayerName(playerName);
    this.playerID.textContent = this.newGame.getPlayerName();
  }

  // handles radio click events
  radioHandler(radio) {
    if (this.difficulty === radio.value) {
      radio.classList.add('active');
    }
    radio.onclick = () => {
      this.resetRadioStyle();
      this.newGame.setDifficulty(radio.value);
      radio.classList.add('active');
    };
  }

  // starts the game when playNowBtn is clicked
  playNowBtnClickHandler(e) {
    this.newGame.yell();
    this.newGame.fightingSpirit.play();
    e.preventDefault();
    e.target.disabled = 'true';
    this.moveScreenUp();
    this.newGame.runGame(this.newGame.getPlayerName());
  }

  // opens the leaderboards
  openOverlay() {
    this.overlay.classList.remove('hide');
  }

  // closes the leaderboards
  closeOverlay() {
    this.overlay.classList.add('hide');
  }

  // used to remove the active class on the radios
  resetRadioStyle() {
    this.difficultyRadios.forEach((radio) => {
      radio.classList.remove('active');
    });
  }

  // moves the body up by 100vh
  moveScreenUp = () => {
    this.bodyMarginTop -= 100;
    document.body.style.marginTop = `${this.bodyMarginTop}vh`;
  };

  // moves the body down by 100vh
  moveScreenDown = () => {
    this.bodyMarginTop += 100;
    document.body.style.marginTop = `${this.bodyMarginTop}vh`;
  };
}

const startGame = new Welcome();
