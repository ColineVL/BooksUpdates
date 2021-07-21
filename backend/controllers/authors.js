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
  return Promise.resolve(name);
}
