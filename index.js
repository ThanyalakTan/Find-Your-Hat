const prompt = require("prompt-sync")({ sigint: true });
const clearScreen = require("clear-screen");

const hat = '👒';
const bomb = '💣';
const fieldCharacter = '🌳';
const player = '🐻';
let positionX = 0;
let positionY = 0;

class Field {
  constructor(field) {
    this.field = field;
    this.gameRun = true;
    this.gameLoop();
  }

  static randomStartPosition(field) {
    let randomPositionX = Math.round(Math.random() * (field.length -1));
    let randomPositionY = Math.round(Math.random() * (field[0].length - 1));


    if (field[randomPositionX][randomPositionY] === bomb || field[randomPositionX][randomPositionY] === hat) {
      this.randomStartPosition();
    }

    field[randomPositionX][randomPositionY] = player;
    positionX = randomPositionX;
    positionY = randomPositionY;

  }

  static createField() {
    const field = [
      ['🌳', '🌳', '💣', '💣', '🌳', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '💣', '🌳', '💣', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '🌳', '💣'],
      ['🌳', '🌳', '🌳', '💣', '🌳', '💣', '💣', '🌳', '💣', '🌳', '🌳', '💣', '💣', '🌳', '💣', '🌳', '💣', '🌳', '💣', '🌳', '🌳', '💣', '🌳'],
      ['🌳', '🌳', '🌳', '🌳', '🌳', '💣', '💣', '💣', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳'],
      ['🌳', '💣', '💣', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '💣', '🌳', '💣', '🌳', '💣', '🌳', '💣', '🌳'],
      ['🌳', '💣', '💣', '💣', '💣', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '💣', '🌳', '🌳'],
      ['🌳', '💣', '💣', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '💣', '💣', '🌳', '🌳', '🌳'],
      ['🌳', '🌳', '🌳', '💣', '🌳', '💣', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '👒', '🌳', '💣', '💣', '🌳', '🌳', '🌳', '🌳', '💣', '🌳', '💣'],
      ['💣', '🌳', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '💣'],
      ['🌳', '💣', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '🌳'],
      ['🌳', '💣', '🌳', '🌳', '💣', '💣', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '🌳', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '🌳'],
      ['🌳', '💣', '💣', '🌳', '💣', '💣', '💣', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '🌳', '🌳', '💣', '💣', '💣', '💣'],
      ['🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '🌳', '🌳', '💣', '💣'],
      ['🌳', '🌳', '🌳', '💣', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '💣', '💣', '🌳', '🌳', '🌳', '💣', '💣', '💣', '🌳', '💣', '🌳', '🌳'],
      ['💣', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '💣', '🌳', '💣', '🌳', '🌳', '💣', '💣', '🌳', '🌳', '🌳', '🌳', '🌳'],
      ['🌳', '🌳', '💣', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '💣', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳', '🌳']
    ];

    this.randomStartPosition(field);
    return field;
  }

moveUp() {
  positionX--
}

moveDown() {
  positionX++
}

moveLeft() {
  positionY--
}

moveRight() {
  positionY++
}

playerMove() {
  const playerInput = prompt('Which way? : ').trim().toLowerCase();
    if (playerInput === 'w' || playerInput === 'ไ') {
      this.moveUp()
    }
    if (playerInput === 's' || playerInput === 'ห') {
      this.moveDown();
    }
    if (playerInput === 'a' || playerInput === 'ฟ') {
      this.moveLeft();
    }
    if (playerInput === 'd' || playerInput === 'ก') {
      this.moveRight();
    }
    if (this.checkPositionPlayer() == true) {
      return
    }
    this.positionPlayer();
  }

  gameLoop() {
    while(this.gameRun) {
      clearScreen();
      console.log(this.field.map(e => e.join("")).join("\n"));
      this.playerMove();
    }
  }

  positionPlayer() {
    this.field[positionX][positionY] = player;
  }

  checkPositionPlayer() {
    if(positionX < 0 || positionX >= this.field.length || positionY < 0 || positionY >= this.field[0].length) {
      this.gameRun = false;
      console.log('Attemps to move outside the field!');
      return true;
    }
    if(this.field[positionX][positionY] === bomb) {
      this.gameRun = false;
      console.log('Crash a bomb!');
      return true;
    }
    if(this.field[positionX][positionY] === hat) {
      this.gameRun = false;
      console.log('congrats! you found your hat');
      return true;
    }
  }
}

new Field(Field.createField());