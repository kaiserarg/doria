const express = require('express');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use('/game', gameRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});