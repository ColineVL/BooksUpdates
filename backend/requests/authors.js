module.exports = {
    getLinkBirthDeath,
    getFavorites,
};

/**
 * Gets a name and returns the request to get the list of the authors with that name.
 * @param {String} name The name of the author you are looking for
 * @return {string} The request
 */
function getLinkBirthDeath(name) {
    return 'PREFIX bio: <http://vocab.org/bio/0.1/> '
      + 'PREFIX foaf: <http://xmlns.com/foaf/0.1/> '
      + 'SELECT ?link ?name ?birth ?death '
      + `WHERE { ?link a foaf:Person; foaf:name "${name}"; foaf:name ?name. `
      + 'OPTIONAL {?link bio:birth ?birth; bio:death ?death.}}';
}

/**
 * Returns the request to get the list of the favorite authors in the database.
 * @return {Array<{}>} The request
 */
function getFavorites() {
    return [
        {
            $match: {
                favorite: true,
            },
        },
        {
            $sort: {
                name: 1,
            },
        },
        {
            $project: {
                link: true,
                name: true,
                _id: 0,
            },
        },
    ];
}
