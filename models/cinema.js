const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allTitles = function () {
  return this.films.map(film => film.title)
};

Cinema.prototype.findByTitle = function (filmTitle) {
  return this.films.find(film => film.title === filmTitle)
};

Cinema.prototype.filterByProperty = function (property, search) {
  return this.films.filter(film => film[`${property}`] === search);
};

Cinema.prototype.anyFilmsOfYear = function (year) {
  return this.films.some(film => film.year === year);
};

Cinema.prototype.allFilesAreOverLength = function (length) {
  return this.films.every(film => film.length > length);
};

Cinema.prototype.totalRunningTimeOfAllFilms = function () {
  return this.films.reduce((accum, film) => accum + film.length, 0);
};

module.exports = Cinema;
