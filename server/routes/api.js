var express = require('express')
var app = express()
var Post = require('../models/post')

// Using req.body in nuxt server should defined bodyParser inside API file.
const bodyParser = require('body-parser')
app.use(bodyParser.json())

module.exports = {
  path: '/blog/api/',
  handler: app
}

app.get('/all', function(req, res, next) {
  var opts = { raw: true }
  Post.findAll(opts)
    .then(function(posts) {
      res.send({ status: 0, data: posts, msg: '这里可以请求到' })
    })
    .catch(function() {
      res.send({ status: 1, errorMsg: '数据库异常' })
    })
})
