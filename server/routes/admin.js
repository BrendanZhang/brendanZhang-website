var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  var data
  if (req.session.user) {
  } else {
  }
  console.log()
})

module.exports = router
