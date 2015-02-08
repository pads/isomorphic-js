var express = require('express');

var router = express.Router();

router.route('/about').get(function(request, response) {
  response.json({
    name: 'Ben'
  });
});

module.exports = router;