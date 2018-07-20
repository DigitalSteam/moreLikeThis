const express = require('express');
const parser = require('body-parser');

const port = 3004;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true,
}));
app.use(express.static('./public'));

app.listen(port, () => {
  console.log('Listening on port 3004');
});
