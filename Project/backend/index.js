const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dboperations = require('./queries/dboperations');
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/users', dboperations.getusers);
app.post('/users', dboperations.saveuser);
app.post('/users/update', dboperations.updateuser);
app.post('/users/delete', dboperations.deleteuser);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});