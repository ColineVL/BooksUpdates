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

// Mongo
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BooksUpdate', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to Mongoose');
});

require('./models/author');

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
