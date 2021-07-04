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

    this.fightingSpirit = new Audio('./assets/bgm/fighting-spirit.mp3');
    this.setFightingSpiritProperty();
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

  getTime() {
    return this.currentTime;
  }

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

  gameSlideIn() {
    this.gameContainer.classList.add('slideIn');
  }

  gameSlideOut() {
    this.gameContainer.classList.remove('slideIn');
  }

  changeRank(rank) {
    this.rank = rank;
  }

  getRank() {
    return this.rank;
  }

  changeCelebrateMessage() {
    this.fightingSpirit.muted = true;
    const victoryBGM = new Audio('./assets/bgm/victory.mp3');
    victoryBGM.volume = 0.5;
    victoryBGM.play();
    this.celebrateMessage = `<p class="celebrate-message">You earned ${this.getRank()} place!!!</p>`;
  }

  get_1st(difficulty) {
    return JSON.parse(localStorage.getItem(`${difficulty}_1st`));
  }

  get_2nd(difficulty) {
    return JSON.parse(localStorage.getItem(`${difficulty}_2nd`));
  }

  get_3rd(difficulty) {
    return JSON.parse(localStorage.getItem(`${difficulty}_3rd`));
  }

  set_1st(playerName, time, difficulty) {
    localStorage.setItem(
      `${difficulty}_1st`,
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  set_2nd(playerName, time, difficulty) {
    localStorage.setItem(
      `${difficulty}_2nd`,
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  set_3rd(playerName, time, difficulty) {
    localStorage.setItem(
      `${difficulty}_3rd`,
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getRankCommands() {
    return {
      first: {
        get: this.get_1st,
        set: this.set_1st,
      },
      second: {
        get: this.get_2nd,
        set: this.set_2nd,
      },
      third: {
        get: this.get_3rd,
        set: this.set_3rd,
      },
    };
  }

  replaceRank(rankToReplace, currentRank) {
    const current = this.getRankCommands()[currentRank].get(this.difficulty);
    if (!currentRank) {
      return;
    }
    return this.getRankCommands()[rankToReplace].set(
      current.playerName,
      current.time,
      this.difficulty
    );
  }

  // changes rank to word example: 1st to first
  toWord(rank) {
    switch (rank) {
      case '1st':
        return 'first';
      case '2nd':
        return 'second';
      case '3rd':
        return 'third';
    }
  }

  // replaces the current rank holder with the challenger
  replaceWithChallenger(rank) {
    let rankWord = this.toWord(rank);
    this.changeRank(rank);
    this.changeCelebrateMessage();
    return this.getRankCommands()[rankWord].set(
      this.getPlayerName(),
      this.getTime(),
      this.difficulty
    );
  }

  handlePlacementSwitch(rank) {
    switch (rank) {
      case '1st':
        this.replaceRank('third', 'second');
        this.replaceRank('second', 'first');
        this.replaceWithChallenger(rank);
        break;
      case '2nd':
        this.replaceRank('third', 'second');
        this.replaceWithChallenger(rank);
        break;
      case '3rd':
        this.replaceWithChallenger(rank);
        break;
    }
  }

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

  handleRank(currentFirstPlace, currentSecondPlace, currentThirdPlace) {
    if (this.handlePlacement(currentFirstPlace, '1st')) {
      return;
    }
    if (this.handlePlacement(currentSecondPlace, '2nd')) {
      return;
    }
    if (this.handlePlacement(currentThirdPlace, '3rd')) {
      return;
    }
  }

  setRank() {
    const currentFirstPlace = this.getRankCommands().first.get(this.difficulty);
    const currentSecondPlace = this.getRankCommands().second.get(
      this.difficulty
    );
    const currentThirdPlace = this.getRankCommands().third.get(this.difficulty);

    this.handleRank(currentFirstPlace, currentSecondPlace, currentThirdPlace);
  }

  getMessageHTML() {
    return `
      <h1>Mission Complete</h1>
      <p>Time: ${this.currentTime} seconds</p>
      <p class="difficulty">Difficulty: <span class="${this.difficulty}">${
      this.difficulty
    }</p></p>
      ${this.rank ? this.celebrateMessage : ''}
      <button id="play-again" class="play-again">Play Again</button>
    `;
  }

  displayMessage(winningMessage) {
    setTimeout(() => {
      this.gameContainer.appendChild(winningMessage);
      this.gameSlideIn();
      const playAgain = document.getElementById('play-again');
      playAgain.onclick = () => {
        window.location.reload();
      };
    }, 1500);
  }

  showText(winningMessage) {
    setTimeout(() => {
      winningMessage.classList.add('showText');
    }, 3000);
  }

  displayWinningMessage() {
    this.setRank();

    const winningMessage = document.createElement('div');
    winningMessage.classList.add('winningMessage');
    winningMessage.innerHTML = this.getMessageHTML();
    this.gameSlideOut();
    this.gameContainer.classList.remove('medium');
    this.gameContainer.classList.remove('hard');
    this.gameContainer.classList.add('victory');

    this.displayMessage(winningMessage);

    this.showText(winningMessage);
  }

  throw(kunai1, kunai2) {
    setTimeout(() => {
      kunai1.classList.add('throw');
      kunai2.classList.add('throw');
    }, 10);
  }

  playThrowKunaiSound() {
    const knifeSound = new Audio('./assets/sfx/kunai-hit.mp3');
    setTimeout(() => {
      knifeSound.play();
    }, 300);
  }

  appendToGameContainer(kunai1, kunai2) {
    this.gameContainer.appendChild(kunai1);
    this.gameContainer.appendChild(kunai2);
  }

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

  throwKunai(card1, card2) {
    const kunai1 = this.createKunai(card1);
    const kunai2 = this.createKunai(card2);

    this.appendToGameContainer(kunai1, kunai2);

    this.throw(kunai1, kunai2);

    this.playThrowKunaiSound();
  }

  preventClick(card1, card2) {
    card1.classList.add('preventClick');
    card2.classList.add('preventClick');
  }

  removeClickClasss(card1, card2) {
    card1.classList.remove('clicked');
    card2.classList.remove('clicked');
  }

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

  increaseClicks() {
    this.clicks++;
  }

  resetClicks() {
    this.clicks = 0;
  }

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

  handleClickSelf(event) {
    if (event.target.classList.contains('clicked')) {
      event.target.classList.remove('clicked');
      this.showBackSide(event.target);
      this.resetClicks();
      return true;
    }
    return false;
  }

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

  setPlayerName(playerName) {
    this.playerName = playerName;
    localStorage.setItem(
      'playerName',
      JSON.stringify({ playerName: `${playerName}` })
    );
  }

  getPlayerName() {
    if (localStorage.getItem('playerName')) {
      this.playerName = JSON.parse(
        localStorage.getItem('playerName')
      ).playerName;
    }
    return this.playerName;
  }

  run(playerName) {
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
    this.rankEasy = document.getElementById('rank-easy');
    this.rankMedium = document.getElementById('rank-medium');
    this.rankHard = document.getElementById('rank-hard');
    this.rowLabels = document.querySelectorAll('.rowLabel p');
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

  setHandlers() {
    this.rowLabels.forEach(
      (rowLabel) =>
        (rowLabel.onclick = () => this.rowLabelClickHandler(rowLabel))
    );

    this.difficultyRadios.forEach((radio) => this.radioHandler(radio));

    this.playNowBtn.onclick = (e) => this.playNowBtnClickHandler(e);

    this.leaderboards.onclick = () => this.openOverlay();

    this.closeBtn.onclick = () => this.closeOverlay();

    this.changeName.onclick = () => this.changeNameClickHandler();
  }

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

  getData(dataTools, difficulty) {
    const data = {
      first: dataTools.first.get(difficulty),
      second: dataTools.second.get(difficulty),
      third: dataTools.third.get(difficulty),
    };
    return data;
  }

  displayRankData(data, difficulty) {
    const varToAccess = (this[`rank${difficulty}`].innerHTML = `
      <div class="first">
        <img
        class="first-img"
        src="./assets/images/Hokage_hat.png"
        alt="hokage hat"/>
        ${data.first ? `<p>${data.first.time} seconds</p>` : ''}
      </div>
      <div class="second">
        <img
        class="second-img"
        src="assets/images/jonin.png"
        alt="jonin symbol"/>
        ${data.second ? `<p>${data.second.time} seconds</p>` : ''}
      </div>
      <div class="third">
        <img
        class="third"
        src="assets/images/chunin.png"
        alt="chunin symbol"/> 
        ${data.third ? `<p>${data.third.time} seconds</p>` : ''}
      </div>
      ${data.first ? `<p class="first">${data.first.playerName}</p>` : ''}
      ${data.second ? `<p class="second">${data.second.playerName}</p>` : ''}
      ${data.third ? `<p class="third">${data.third.playerName}</p>` : ''}
    `);
  }

  updateLeaderBoard() {
    const dataTools = this.newGame.getRankCommands();

    const easyData = this.getData(dataTools, 'easy');
    const mediumData = this.getData(dataTools, 'medium');
    const hardData = this.getData(dataTools, 'hard');

    this.displayRankData(easyData, 'Easy');
    this.displayRankData(mediumData, 'Medium');
    this.displayRankData(hardData, 'Hard');
  }

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

  yell() {
    const yellSFX = [
      new Audio('./assets/sfx/rasengan.mp3'),
      new Audio('./assets/sfx/shinra-tensei.mp3'),
      new Audio('./assets/sfx/kamui.mp3'),
    ];

    return yellSFX[Math.floor(Math.random() * yellSFX.length)].play();
  }

  playNowBtnClickHandler(e) {
    this.yell();
    this.newGame.fightingSpirit.play();
    e.preventDefault();
    e.target.disabled = 'true';
    this.moveScreenUp();
    this.newGame.run(this.newGame.getPlayerName());
  }

  openOverlay() {
    this.overlay.classList.remove('hide');
  }

  closeOverlay() {
    this.overlay.classList.add('hide');
  }

  resetRadioStyle() {
    this.difficultyRadios.forEach((radio) => {
      radio.classList.remove('active');
    });
  }

  moveScreenUp = () => {
    this.bodyMarginTop -= 100;
    document.body.style.marginTop = `${this.bodyMarginTop}vh`;
  };

  moveScreenDown = () => {
    this.bodyMarginTop += 100;
    document.body.style.marginTop = `${this.bodyMarginTop}vh`;
  };
}

const startGame = new Welcome();
