var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('mongoose');
var app = express();
var hbs = require('hbs');

//Env variables setuo
var dotenv = require('dotenv');
dotenv.config();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));



//Routes

app.get('/', function(req, res, next) {
  res.render(path.join(__dirname, 'build', 'index.html'));
});

var authRoute = require('./routes/auth');
var usersRouter = require('./routes/users');
var inventoryRouter = require('./routes/inventory');
app.use('/users', usersRouter);
app.use('/auth', authRoute);
app.use('/inventory', inventoryRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



db.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("Connected to MongoDB")).catch((err)=> console.log(err))



module.exports = app;
