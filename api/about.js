var express = require('express');

var router = express.Router({mergeParams: true});

router.route('/').get(function(request, response) {
  response.json({
    name: 'Ben'
  });
});

module.exports = router;