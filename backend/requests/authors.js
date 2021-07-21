module.exports = {
  getLinkBirthDeath,
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
