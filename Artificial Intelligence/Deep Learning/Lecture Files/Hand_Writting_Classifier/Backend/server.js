const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

const apiRouter = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());


app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
