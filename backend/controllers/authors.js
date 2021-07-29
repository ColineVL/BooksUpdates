// Libraries
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const db = require('mongoose');
db.Promise = require('bluebird');

// Mongo
const Author = db.model('Author');

// Requests
const requests = require('../requests/authors');

fetch.Promise = Bluebird;

// Constants
const ENDPOINT = 'https://data.bnf.fr/sparql';
const FORMAT = 'application/json';

module.exports = {
    getFavorites,
    searchAuthor,
    upsertAuthorToDb,
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
 * Checks if they are in the database, and if they are favorites.
 * @param {String} name The name of the author you are looking for
 * @return {Promise<Array<{link: String, name: String, death: String, birth: String, favorite: Boolean}>>}
 */
function searchAuthor(name) {
    const query = requests.getLinkBirthDeath(name);
    const fullRequest = `${ENDPOINT}?query=${encodeURI(query)}&format=${FORMAT}`;
    return fetch(fullRequest)
        .then((res) => res.json())
        .then((json) => {
            // We extract what is interesting
            const list = json.results.bindings;
            // We create the array with all the requests : we are going to look in the database
            // if there are the authors we found on the BNF (and if they are some favorites).
            const promisesArray = list.map((obj) => Author.findOne({ link: obj.link.value, favorite: true }));
            return Promise.all(promisesArray)
                .then((resultRequest) => {
                    const result = resultRequest.map((res, index) => ({
                        link: list[index].link.value,
                        name: list[index].name ? list[index].name.value : undefined,
                        birth: list[index].birth ? list[index].birth.value : undefined,
                        death: list[index].death ? list[index].death.value : undefined,
                        favorite: !!res,
                    }));
                    return Promise.resolve(result);
                });
        });
}

/**
 * Upserts an author to the database. Looks if the author already exists based on the BNF link.
 * @param {String} authorData.link The BNF link of the author
 * @param {String} authorData.name The author's name
 * @param {Boolean} authorData.favorite True if the author is a favorite, false otherwise
 */
function upsertAuthorToDb(authorData) {
    const filter = {
        link: authorData.link,
    };
    return Author.updateOne(filter, authorData, { upsert: true });
}
