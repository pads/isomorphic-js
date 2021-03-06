var request = require('superagent');

var getUrl = function(path, host) {
  // The server needs the full path otherwise it doesn't know where to go.
  var url = host + path;
  if(process.browser) { url = path; }
  return url;
};

var handleError = function(error) {
  console.log(error);
};

var client = {
  get: function(path, host, callback) {
    return request.get(getUrl(path, host))
                  .end(callback)
                  .on('error', handleError);
  },
  post: function(path, host, data, callback) {
    return request.post(getUrl(path, host))
                  .send(data)
                  .end(callback)
                  .on('error', handleError);
  }
};

module.exports = client;
