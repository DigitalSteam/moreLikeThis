const express = require('express');
const parser = require('body-parser');
const faker = require('faker');
const db = require('../db/index.js');

const port = 3004;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true,
}));
app.use(express.static('./public'));

app.get('/api/games/:genreId/more-games', (req, res) => {
  db.getRelevantGames(req.params.genreId.match(/\d+/g)[0], (err, data) => {
    if (err) {
      throw err;
    } else {
      res.json(data);
    }
  });
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});


// this code is for populating the database initially
// const genreArray = ['Action', 'Adventure', 'Casual', 'Early Access', 'Free to Play', 'Indie', 'Massively Multiplayer', 'Racing', 'RPG', 'Simulation', 'Sports', 'Strategy'];

// const insertIntoDb = () => {
//   for (let g = 0; g < genreArray.length; g += 1) {
//     db.popGenres(genreArray[g]);
//   }
//   for (let i = 0; i < 100; i += 1) {
//     const randomGameObj = {
//       name: faker.lorem.words(),
//       description: faker.lorem.sentences(),
//       release_date: faker.date.past(),
//       price: faker.commerce.price(),
//       thumbnail: faker.image.imageUrl(),
//     };
//     db.popDb(randomGameObj, (err) => {
//       if (err) {
//         throw err;
//       } else {
//         console.log('Sucess!');
//       }
//     });
//     db.popLink(randomGameObj.name);
//   }
// };

// insertIntoDb();
