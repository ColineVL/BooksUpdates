// LIBRARIES
const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// PORT
const port = process.env.PORT || 3001;

// USE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTERS
app.use('/authors', require('./routes/authors'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// BEGIN
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Runnning on ${port}`);
});
module.exports = app;
