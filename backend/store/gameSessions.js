const GameSession = require('../models/gameSession');

const gameSessions = {};

function createGameSession() {
  const newSession = new GameSession();
  gameSessions[newSession.id] = newSession;
  return newSession;
}

function getGameSession(id) {
  return gameSessions[id];
}

module.exports = { createGameSession, getGameSession };
