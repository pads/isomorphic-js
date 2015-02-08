var request = require('superagent');

var getUrl = function(path, host) {
  // The server needs the full path otherwise it doesn't know where to go.
  var url = host + path;
  if(process.browser) { url = path; }
  return url;
};

var client = {
  get: function(path, host, callback) {
    return request.get(getUrl(path, host), callback);
  }
};

module.exports = client;