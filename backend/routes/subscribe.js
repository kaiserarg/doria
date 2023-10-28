const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the schema for the emails
const emailSchema = new mongoose.Schema({
  email: String
}, { collection: 'emails' });

// Create the model for the emails
const Email = mongoose.model('Email', emailSchema);

router.post('/', (req, res) => {
  const email = new Email({
    email: req.body.email
  });

  email.save()
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
