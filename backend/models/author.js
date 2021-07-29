// Libraries
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: String,
    link: String,
    favorite: Boolean,
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
