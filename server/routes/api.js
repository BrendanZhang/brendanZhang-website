var express = require('express')
var app = express()
var Post = require('../models/post')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

module.exports = {
  path: '/admin/api/',
  handler: app
}

app.get('/all', function(req, res, next) {
  var opts = { raw: true }
  Post.findAll(opts)
    .then(function(posts) {
      console.log(posts)
      res.send({ status: 0, data: posts, msg: '这个可以请求到' })
    })
    .catch(function() {
      res.send({ status: 1, errorMsg: '数据库异常' })
    })
})

/* app.post('/add', function(req, res, next) {
  console.log(req.body)
  console.log(post)
  Post.create({
    title: post.title,
    tags: post.tags,
    introduce: post.introduce,
    content: post.content
  })
    .then(function() {
      console.log(arguments)
      res.send({ msg: '接收到了' })
    })
    .catch(function() {
      res.send({ status: 1, errorMsg: '数据库异常或者你没有权限' })
    })
})
 */
app.post('/add', function(req, res, next) {
  console.log(req.body)
  res.send({ msg: '这里收到了' })
})
