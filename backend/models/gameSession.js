const { v4: uuidv4 } = require('uuid');

function generateCode(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

class GameSession {
  constructor() {
    this.id = generateCode();
  }
}

module.exports = GameSession;