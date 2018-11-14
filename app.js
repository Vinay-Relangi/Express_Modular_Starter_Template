const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ejs = require('ejs').renderFile;
const compression = require('compression');
const helmet = require('helmet');

const routes = require('./routes');

const app = express();

app.use(helmet());
app.engine('html', ejs);
app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.use(compression());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,x-access-token,link');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT,PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/v1', routes);

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

console.error = function (d) {
  debugger;
}

module.exports = app;