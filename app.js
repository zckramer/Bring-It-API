require('./utils/db');

const cors = require("cors");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// ==================ROUTERS================
const userRouter = require('./routes/user.router');
const eventRouter = require('./routes/event.router');
const itemRouter = require('./routes/item.router');

const app = express();

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
