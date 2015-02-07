require('node-jsx').install({extension: '.jsx'});

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var url = require('url');
var React = require('react');
var engine = require('express-react-views');

var reactApp = require('./App.jsx');

var app = express();

app.set('view engine', 'jsx');
app.engine('jsx', engine.createEngine());

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// render react routes on server
app.use(function(req, res, next) {
  try {
    var path = url.parse(req.url).pathname;
    var app = reactApp({path: path});
    var markup = React.renderToString(app);
    res.send(markup);
  } catch(err) {
    return next(err);
  }
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('Error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('Error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
