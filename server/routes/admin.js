var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/admin', function(req, res, next) {
  var data
  if (req.session.user) {
  } else {
  }
  console.log()
})

module.exports = router
