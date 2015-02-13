// Allows node to parse JSX files without errors.
require('node-jsx').install({extension: '.jsx'});

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var url = require('url');
var ReactAsync = require('react-async');
var engine = require('express-react-views');
var DocumentTitle = require('react-document-title');
var mongoose = require('mongoose');

var reactApp = require('./src/App.jsx');
var apiRouter = require('./api/router');

var app = express();

/*
 * Database
 */
mongoose.connect('mongodb://localhost/development', {
  server: {
    socketOptions: {
      keepAlive: 1
    }
  }
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

/*
 * Misc Config
 */
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Views
 */
app.set('view engine', 'jsx');
app.engine('jsx', engine.createEngine());

/*
 * API Routing
 */
app.use('/api', apiRouter);

/*
 * Page Routing
 */
app.use(function(req, res, next) {
    var path = url.parse(req.url).pathname;
    var host = req.get('host');
    var app = reactApp({path: path, host: host});
    ReactAsync.renderToStringAsync(app, function(err, markup) {
      if(err) {
        return next(err);
      }
      // Prevents memory leaks (https://github.com/gaearon/react-document-title#server-usage)
      DocumentTitle.rewind();
      res.send(markup);
    });
});

/*
 * Error Handlers
 */

// Development error handler (this will print stack trace).
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('Error', {
            message: err.message,
            error: err
        });
    });
}

// Production error handler (no stack traces leaked to user)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('Error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
