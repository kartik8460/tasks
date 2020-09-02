const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/index.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerUserFile = require('./swagger.user.json');
const swaggerTaskFile = require('./swagger.task.json');
const app = express();

const mongooseConnection = require('./config/database')();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/swagger-api-user', swaggerUi.serve, swaggerUi.setup(swaggerUserFile));
app.use('/swagger-api-task', swaggerUi.serve, swaggerUi.setup(swaggerTaskFile));
app.use("/static-files/asset/", express.static(path.join("./assets")));
app.use('/api', routes);

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

mongooseConnection.then(() => {
  console.log(`  ***********************************************************
  ***********************************************************
  ******************** Server Running At ********************
  ***********************************************************
  ***********************************************************
  ***************** http://localhost:3000/ ******************
  ***********************************************************
  ***********************************************************`);
})
module.exports = app;
