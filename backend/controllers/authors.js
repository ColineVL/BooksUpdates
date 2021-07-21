const fetch = require('node-fetch');
const Bluebird = require('bluebird');

fetch.Promise = Bluebird;

module.exports = {
  getFavorites,
  searchAuthor,
};

function getFavorites() {
  return Promise.resolve(
    [
      { _id: 1, name: 'Sachin', runs: '18426' },
      { _id: 2, name: 'Dhoni', runs: '10500' },
      { _id: 3, name: 'Virate', runs: '10843' },
    ],
  );
}

function searchAuthor(name) {
  const endpoint = 'https://data.bnf.fr/sparql';
  const query = 'select * {?s ?p ?o} limit 3';
  const format = 'application/json';
  const fullRequest = `${endpoint}?query=${encodeURI(query)}&format=${format}`;

  return fetch(fullRequest)
    .then((res) => res.json());
}
