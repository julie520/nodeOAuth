const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require('./configuration');

mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
mongoose.connect(config.connectstring, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(cors());

// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());


// Routes
app.use('/users', require('./routes/users'));

// Start the server
// const port = process.env.PORT || 5000;
// app.listen(port);
// console.log(`Server listening at ${port}`);

module.exports = app;