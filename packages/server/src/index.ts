const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(4444, (err: string) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});