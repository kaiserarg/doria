const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const lobbySchema = new mongoose.Schema({
  code: String,
  users: [String],
}, { collection: 'lobbies' });

const Lobby = mongoose.model('Lobby', lobbySchema);

router.post('/create', async (req, res) => {
  const lobby = new Lobby({
    code: Math.random().toString(36).substring(2, 7).toUpperCase(),
    users: [req.body.username],
  });

  try {
    await lobby.save();
    res.json({ lobbyCode: lobby.code });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.get('/:code', async (req, res) => {
  try {
    const lobby = await Lobby.findOne({ code: req.params.code });
    if (!lobby) {
      res.status(404).json({ error: "Lobby not found" });
      return;
    }

    //TODO: Check if max users reached (4)

    res.json({ message: "Lobby joined successfully" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;