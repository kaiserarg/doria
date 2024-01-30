const express = require('express');
const router = express.Router();
const { createGameSession, getGameSession } = require('../store/gameSessions');
const { getAvailableGames } = require('../store/gameRegistry');

router.get('/available-games', (req, res) => {
  res.json(getAvailableGames());
});

router.post('/create-session', (req, res) => {
  const session = createGameSession();
  res.json(session);
});

router.get('/join-session/:id', (req, res) => {
  const session = getGameSession(req.params.id);
  if (session) {
    res.json(session);
  } else {
    res.status(404).send('Session not found');
  }
});

module.exports = router;

