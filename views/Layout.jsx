/** @jsx React.DOM */
'use strict';

var React = require('react');
var DocumentTitle = require('react-document-title');
var Link = require('react-router-component').Link;

var Layout = React.createClass({

  render: function() {
    return (
      <DocumentTitle title={this.props.title}>
        <main>
          <nav className="pure-menu pure-menu-open pure-menu-horizontal">
            <Link href="/" className="pure-menu-heading">Brumify</Link>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/playlists">Playlists</Link>
              </li>
            </ul>
          </nav>
          <section>
            {this.props.children}
          </section>
        </main>
      </DocumentTitle>
    );
  }

});

module.exports = Layout;
