require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const subscribeRouter = require('./routes/subscribe');
const cors = require('cors');

const port = 5000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;

const uri = 'mongodb+srv://' + username + ':' + password + cluster;

async function connect() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}

connect();

app.use(cors());
app.use(express.json());
app.use('/subscribe', subscribeRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));