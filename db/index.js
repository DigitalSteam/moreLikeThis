const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'relevant',
});

const popDb = (infoObj, cb) => {
  const randomInt = Math.floor(Math.random() * 11);
  connection.query(`INSERT INTO games (name, description, release_date, price, average_review, thumbnail) VALUES ('${infoObj.name}', '${infoObj.description}', '${infoObj.release_date}', ${infoObj.price}, '${randomInt}/10', '${infoObj.thumbnail}')`, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const popGenres = (genreName) => {
  connection.query(`INSERT INTO genres (name) VALUES ('${genreName}')`, (err) => {
    if (err) {
      throw err;
    }
  });
};

const popLink = (currentGame) => {
  const randomNum = Math.ceil(Math.random() * 11);
  connection.query(`INSERT INTO link (genreId, gameId) VALUES ((SELECT id FROM genres WHERE genres.id=${randomNum}), (SELECT id FROM games WHERE games.name='${currentGame}'))`, (err) => {
    if (err) {
      throw err;
    }
  });
};

module.exports = {
  popDb,
  popGenres,
  popLink,
};
