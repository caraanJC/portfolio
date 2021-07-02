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

    this.storageTools = {
      easy: {
        first: {
          get: this.getEasy_1,
          set: this.setEasy_1,
        },
        second: {
          get: this.getEasy_2,
          set: this.setEasy_2,
        },
        third: {
          get: this.getEasy_3,
          set: this.setEasy_3,
        },
      },
      medium: {
        first: {
          get: this.getMedium_1,
          set: this.setMedium_1,
        },
        second: {
          get: this.getMedium_2,
          set: this.setMedium_2,
        },
        third: {
          get: this.getMedium_3,
          set: this.setMedium_3,
        },
      },
      hard: {
        first: {
          get: this.getHard_1,
          set: this.setHard_1,
        },
        second: {
          get: this.getHard_2,
          set: this.setHard_2,
        },
        third: {
          get: this.getHard_3,
          set: this.setHard_3,
        },
      },
    };
  }

  setDifficulty(difficulty) {
    this.difficulty = difficulty;
    localStorage.setItem(
      'difficulty',
      JSON.stringify({ difficulty: `${difficulty}` })
    );
  }

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

  increaseTime(t) {
    this.currentTime += t;
    this.timeElement.textContent = this.currentTime;
  }

  setTime() {
    setTimeout(() => {
      this.timeId = setInterval(() => {
        this.increaseTime(1);
      }, 1000);
    }, 2000);
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
    card1.classList.add('preventClick');
    card2.classList.add('preventClick');
  }

  // checks if there's a class called clicked
  checkForClickClass(card) {
    return card.classList.contains('clicked');
  }

  showFrontSide(card) {
    card.src = `./assets/images/${card.alt}.jpg`;
  }

  showBackSide(card) {
    card.src = `./assets/images/back-side.jpg`;
  }

  increaseScore() {
    this.score++;
  }

  gameSlideIn() {
    this.gameContainer.classList.add('slideIn');
  }

  gameSlideOut() {
    this.gameContainer.classList.remove('slideIn');
  }

  // easy local storage controls
  setEasy_1(playerName, time) {
    localStorage.setItem(
      'easy_1st',
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getEasy_1(playerName) {
    return JSON.parse(localStorage.getItem('easy_1st'));
  }

  setEasy_2(playerName, time) {
    localStorage.setItem(
      'easy_2nd',
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getEasy_2(playerName) {
    return JSON.parse(localStorage.getItem('easy_2nd'));
  }

  setEasy_3(playerName, time) {
    localStorage.setItem(
      'easy_3rd',
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getEasy_3(playerName) {
    return JSON.parse(localStorage.getItem('easy_3rd'));
  }

  // medium local storage controls
  setMedium_1(playerName, time) {
    localStorage.setItem(
      'medium_1st',
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getMedium_1(playerName) {
    return JSON.parse(localStorage.getItem('medium_1st'));
  }

  setMedium_2(playerName, time) {
    localStorage.setItem(
      'medium_2nd',
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getMedium_2(playerName) {
    return JSON.parse(localStorage.getItem('medium_2nd'));
  }

  setMedium_3(playerName, time) {
    localStorage.setItem(
      'medium_3rd',
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getMedium_3(playerName) {
    return JSON.parse(localStorage.getItem('medium_3rd'));
  }

  // hard local storage controls
  setHard_1(playerName, time) {
    localStorage.setItem(
      'hard_1st',
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getHard_1(playerName) {
    return JSON.parse(localStorage.getItem('hard_1st'));
  }

  setHard_2(playerName, time) {
    localStorage.setItem(
      'hard_2nd',
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getHard_2(playerName) {
    return JSON.parse(localStorage.getItem('hard_2nd'));
  }

  setHard_3(playerName, time) {
    localStorage.setItem(
      'hard_3rd',
      JSON.stringify({
        playerName: `${playerName}`,
        time: `${time}`,
      })
    );
  }

  getHard_3(playerName) {
    return JSON.parse(localStorage.getItem('hard_3rd'));
  }

  replaceThirdWithSecond() {
    const secondPlace = this.storageTools[this.difficulty].second.get();
    if (!secondPlace) return;
    const { playerName, time } = secondPlace;
    return this.storageTools[this.difficulty].third.set(playerName, time);
  }

  replaceSecondWithFirst() {
    const firstPlace = this.storageTools[this.difficulty].first.get();
    if (!firstPlace) return;
    const { playerName, time } = firstPlace;
    return this.storageTools[this.difficulty].second.set(playerName, time);
  }

  replaceFirstWithChallenger() {
    return this.storageTools[this.difficulty].first.set(
      this.getName(),
      this.getTime()
    );
  }

  replaceSecondWithChallenger() {
    return this.storageTools[this.difficulty].second.set(
      this.getName(),
      this.getTime()
    );
  }

  replaceThirdWithChallenger() {
    return this.storageTools[this.difficulty].third.set(
      this.getName(),
      this.getTime()
    );
  }

  setRank() {
    const firstPlace = this.storageTools[this.difficulty].first.get();
    const secondPlace = this.storageTools[this.difficulty].second.get();
    const thirdPlace = this.storageTools[this.difficulty].third.get();
    // check if 1st place
    // put in challenger in first place if empty
    if (!firstPlace) {
      this.replaceFirstWithChallenger();
    } else {
      if (this.currentTime < firstPlace.time) {
        this.replaceThirdWithSecond();
        this.replaceSecondWithFirst();
        this.replaceFirstWithChallenger();
      } else {
        if (!secondPlace) {
          this.replaceSecondWithChallenger();
        } else if (this.currentTime < secondPlace.time) {
          this.replaceThirdWithSecond();
          this.replaceSecondWithChallenger();
        } else {
          if (!thirdPlace) {
            this.replaceThirdWithChallenger();
          } else if (this.currentTime < thirdPlace.time) {
            this.replaceThirdWithChallenger();
          } else {
            return;
          }
        }
      }
    }
  }

  displayWinningMessage() {
    this.setRank();

    const winningMessage = document.createElement('div');
    winningMessage.classList.add('winningMessage');

    winningMessage.innerHTML = `
      <h1>Mission Complete</h1>
      <p>Time: ${this.currentTime} seconds</p>
      <p class="difficulty">Difficulty: <span class="${this.difficulty}">${this.difficulty}</p></p>
      <button id="play-again" class="play-again">Play Again</button>
    `;
    this.gameSlideOut();
    this.gameContainer.classList.remove('medium');
    this.gameContainer.classList.remove('hard');
    this.gameContainer.classList.add('victory');

    setTimeout(() => {
      this.gameContainer.appendChild(winningMessage);
      this.gameSlideIn();
      const playAgain = document.getElementById('play-again');
      playAgain.onclick = () => {
        window.location.reload();
      };
    }, 1500);
    setTimeout(() => {
      winningMessage.classList.add('showText');
    }, 3000);
  }

  //   checks if card1 is the same as card2
  checkForMatch(card1, card2) {
    if (card1.alt == card2.alt) {
      setTimeout(() => this.hideCard(card1, card2), 200);
      this.increaseScore();
      if (this.score == this.memoryNames.length / 2) {
        this.stopTime();
        setTimeout(() => {
          this.cleanGameContainer();
          this.displayWinningMessage();
        }, 1000);
      }
    } else {
      setTimeout(() => {
        this.showBackSide(card1);
        this.showBackSide(card2);
      }, 1000);
    }
    card1.classList.remove('clicked');
    card2.classList.remove('clicked');
  }

  //   Main Event Handler
  cardClickHandler(event) {
    this.showFrontSide(event.target);
    // remove clicked class if the user clicked the same thing also reset the click to 0
    if (event.target.classList.contains('clicked')) {
      event.target.classList.remove('clicked');
      this.showBackSide(event.target);
      this.clicks = 0;
      return;
    }

    event.target.classList.add('clicked');

    this.clicks++;

    if (this.clicks == 2) {
      const cards = document.querySelectorAll('.card-image');
      // convert cards from nodelist to array
      const cardsArray = Array.from(cards);

      const clickedCards = cardsArray.filter(this.checkForClickClass);

      const [card1, card2] = clickedCards;
      this.checkForMatch(card1, card2);

      this.clicks = 0;
    }
  }

  // displays the cards on the screen
  createCards() {
    this.memoryNames.forEach((name) => {
      const card = document.createElement('img');
      card.classList.add('card-image');
      card.alt = name;
      this.showFrontSide(card);
      card.classList.add('preventClick');
      setTimeout(() => card.classList.remove('preventClick'), 3500);
      setTimeout(() => this.showBackSide(card), 3500);
      card.style.order = Math.floor(Math.random() * 10);

      card.onclick = () => this.cardClickHandler(event);
      card.ondragstart = () => false;

      this.gameContainer.appendChild(card);
    });
  }

  setName(playerName) {
    this.playerName = playerName;
    localStorage.setItem(
      'playerName',
      JSON.stringify({ playerName: `${playerName}` })
    );
  }

  getName() {
    if (localStorage.getItem('playerName')) {
      this.playerName = JSON.parse(
        localStorage.getItem('playerName')
      ).playerName;
    }
    return this.playerName;
  }

  run(playerName) {
    this.setName(playerName);
    this.makeCopies();
    this.createCards();
    this.gameSlideIn();
    this.setTime();
  }
}

class Welcome {
  constructor() {
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

    this.playerID.textContent = this.newGame.getName();

    this.rowLabels.forEach(
      (rowLabel) =>
        (rowLabel.onclick = () => this.rowLabelClickHandler(rowLabel))
    );

    this.difficultyRadios.forEach((radio) => this.radioHandler(radio));

    this.playNowBtn.onclick = (e) => this.playNowBtnClickHandler(e);

    this.leaderboards.onclick = () => this.openOverlay();

    this.closeBtn.onclick = () => this.closeOverlay();

    this.changeName.onclick = () => this.changeNameClickHandler();

    this.updateLeaderBoard();
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

  updateLeaderBoard() {
    const firstPlaceEasy = this.newGame.getEasy_1();
    const secondPlaceEasy = this.newGame.getEasy_2();
    const thirdPlaceEasy = this.newGame.getEasy_3();

    const firstPlaceMedium = this.newGame.getMedium_1();
    const secondPlaceMedium = this.newGame.getMedium_2();
    const thirdPlaceMedium = this.newGame.getMedium_3();

    const firstPlaceHard = this.newGame.getHard_1();
    const secondPlaceHard = this.newGame.getHard_2();
    const thirdPlaceHard = this.newGame.getHard_3();

    let firstEasyName = 'none';
    let firstEasyTime = '';
    let secondEasyName = 'none';
    let secondEasyTime = '';
    let thirdEasyName = 'none';
    let thirdEasyTime = '';
    let firstMediumName = 'none';
    let firstMediumTime = '';
    let secondMediumName = 'none';
    let secondMediumTime = '';
    let thirdMediumName = 'none';
    let thirdMediumTime = '';
    let firstHardName = 'none';
    let firstHardTime = '';
    let secondHardName = 'none';
    let secondHardTime = '';
    let thirdHardName = 'none';
    let thirdHardTime = '';
    if (firstPlaceEasy) {
      firstEasyName = firstPlaceEasy.playerName;
      firstEasyTime = firstPlaceEasy.time;
    }

    if (secondPlaceEasy) {
      secondEasyName = secondPlaceEasy.playerName;
      secondEasyTime = secondPlaceEasy.time;
    }

    if (thirdPlaceEasy) {
      thirdEasyName = thirdPlaceEasy.playerName;
      thirdEasyTime = thirdPlaceEasy.time;
    }

    if (firstPlaceMedium) {
      firstMediumName = firstPlaceMedium.playerName;
      firstMediumTime = firstPlaceMedium.time;
    }

    if (secondPlaceMedium) {
      secondMediumName = secondPlaceMedium.playerName;
      secondMediumTime = secondPlaceMedium.time;
    }

    if (thirdPlaceMedium) {
      thirdMediumName = thirdPlaceMedium.playerName;
      thirdMediumTime = thirdPlaceMedium.time;
    }

    if (firstPlaceHard) {
      firstHardName = firstPlaceHard.playerName;
      firstHardTime = firstPlaceHard.time;
    }

    if (secondPlaceHard) {
      secondHardName = secondPlaceHard.playerName;
      secondHardTime = secondPlaceHard.time;
    }

    if (thirdPlaceHard) {
      thirdHardName = thirdPlaceHard.playerName;
      thirdHardTime = thirdPlaceHard.time;
    }

    this.rankEasy.innerHTML = `
      <div class="first">
        <img
        class="first-img"
        src="./assets/images/Hokage_hat.png"
        alt="hokage hat"/>
        <p>${firstEasyTime} seconds</p>
      </div>
      <div class="second">
        <img
        class="second-img"
        src="assets/images/jonin.png"
        alt="jonin symbol"/>
        <p>${secondEasyTime} seconds</p>
      </div>
      <div class="third">
        <img
        class="third"
        src="assets/images/chunin.png"
        alt="chunin symbol"/> 
        <p>${thirdEasyTime} seconds</p>
      </div>
      <p class="first">${firstEasyName}</p>
      <p class="second">${secondEasyName}</p>
      <p class="third">${thirdEasyName}</p>
    `;
    this.rankMedium.innerHTML = `
    <div class="first">
      <img
      class="first-img"
      src="./assets/images/Hokage_hat.png"
      alt="hokage hat"/>
      <p>${firstMediumTime} seconds</p>
    </div>
    <div class="second">
      <img
      class="second-img"
      src="assets/images/jonin.png"
      alt="jonin symbol"/>
      <p>${secondMediumTime} seconds</p>
    </div>
    <div class="third">
      <img
      class="third"
      src="assets/images/chunin.png"
      alt="chunin symbol"/> 
      <p>${thirdMediumTime} seconds</p>
    </div>
    <p class="first">${firstMediumName}</p>
    <p class="second">${secondMediumName}</p>
    <p class="third">${thirdMediumName}</p>
    `;
    this.rankHard.innerHTML = `
    <div class="first">
      <img
      class="first-img"
      src="./assets/images/Hokage_hat.png"
      alt="hokage hat"/>
      <p>${firstHardTime} seconds</p>
    </div>
    <div class="second">
      <img
      class="second-img"
      src="assets/images/jonin.png"
      alt="jonin symbol"/>
      <p>${secondHardTime} seconds</p>
    </div>
    <div class="third">
      <img
      class="third"
      src="assets/images/chunin.png"
      alt="chunin symbol"/> 
      <p>${thirdHardTime} seconds</p>
    </div>
    <p class="first">${firstHardName}</p>
    <p class="second">${secondHardName}</p>
    <p class="third">${thirdHardName}</p>
    `;
  }

  changeNameClickHandler() {
    const playerName = prompt('Enter Player Name');
    if (!playerName) {
      alert('Error. Empty Name');
      this.changeNameClickHandler();
    }
    this.newGame.setName(playerName);
    this.playerID.textContent = this.newGame.getName();
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

  playNowBtnClickHandler(e) {
    e.preventDefault();
    e.target.disabled = 'true';
    this.moveScreenUp();
    this.newGame.run(this.newGame.getName());
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
