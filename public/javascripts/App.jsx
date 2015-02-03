/** @jsx React.DOM */
'use strict';

var React = require('react/addons');
var Router = require('react-router-component');
var Home = require('./Home');

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({

  render: function () {
    return (
      <Locations ref="router" path={this.props.path}>
        <Location path="/" handler={Home} />
      </Locations>
    );
  }
});

module.exports = App;

// Bootstrap client
if (typeof window !== 'undefined') {
  window.onload = function () {
    React.render(React.createElement(App), document);
  };
}