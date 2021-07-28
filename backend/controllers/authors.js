// Libraries
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
// Requests
const requests = require('../requests/authors');

fetch.Promise = Bluebird;

// Constants
const ENDPOINT = 'https://data.bnf.fr/sparql';
const FORMAT = 'application/json';

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

/**
 * Gets a name, looks up on the BNF which authors have that name, and returns the list of
 * the authors with the link of their page on the BNF, their date of birth and their date of death.
 * @param {String} name The name of the author you are looking for
 * @return {Promise<{vars: String[], results: Array<{}>}>}
 */
function searchAuthor(name) {
  const query = requests.getLinkBirthDeath(name);
  const fullRequest = `${ENDPOINT}?query=${encodeURI(query)}&format=${FORMAT}`;
  return fetch(fullRequest)
    .then((res) => res.json())
    .then((json) => ({
      vars: json.head.vars,
      results: json.results.bindings,
    }));
}
