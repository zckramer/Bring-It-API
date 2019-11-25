require('./utils/db');

const cors = require("cors");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ==================ROUTERS================
var userRouter = require('./routes/user.router');
var eventRouter = require('./routes/event.router');
var itemRouter = require('./routes/item.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/items', itemRouter);

module.exports = app;
