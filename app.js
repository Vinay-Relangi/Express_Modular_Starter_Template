const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ejs = require('ejs').renderFile;
const compression = require('compression');
const helmet = require('helmet');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const db = require('./models/dbModel');
const routes = require('./routes');
const logFormat = `:status ---> :method ---> :url ---> :date ---> :remote-addr`;

const app = express();

app.engine('html', ejs);

app.set('views', __dirname + '/public');
app.set('view engine', 'html');

app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,x-access-token,link');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT,PATCH, DELETE, OPTIONS');
  next();
});

app.use(morgan(logFormat, {
  // skip: (req, res) => false,
  stream: fs.createWriteStream(path.join(__dirname, 'logs', 'logs.log'), { flags: 'a' })
}))

app.use('/api/v1', routes);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

setTimeout(async () => {
  console.log(await db.dbRequest('select * from UDS_CenterTableConfig'));
}, 1000);

module.exports = app;