var express = require('express')
var app = express()
var Post = require('../models/post')

// Using req.body in nuxt server should defined bodyParser inside API file.
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
      res.send({ status: 0, data: posts, msg: '这个可以请求到' })
    })
    .catch(function() {
      res.send({ status: 1, errorMsg: '数据库异常' })
    })
})

app.post('/add', function(req, res, next) {
  let post = req.body.post
  Post.create({
    title: post.title,
    tags: post.tags,
    introduce: post.introduce,
    content: post.content
  })
    .then(function() {
      res.send({ msg: '接收到了' })
    })
    .catch(function() {
      res.send({ status: 1, errorMsg: '数据库异常或者你没有权限' })
    })
})

app.post('/delete', function(req, res, next) {
  var postId = req.body.id
  console.log(postId)
  Post.destroy({ where: { id: postId } })
    .then(function(deleteLen) {
      if (deleteLen === 0) {
        return res.send({ status: 1, errorMsg: '你没有权限' })
      }
      res.send({ status: 0, msg: '删除成功' })
    })
    .catch(function(e) {
      res.send({
        status: 1,
        errorMsg: '数据库异常或者你没有权限'
      })
    })
})
app.post('/edit', function(req, res, next) {
  var postId = req.body.id
  var post = req.body.post
  Post.update(
    {
      title: post.title,
      tags: post.tags,
      introduce: post.introduce,
      content: post.content
    },
    { where: { id: postId } }
  )
    .then(function(e) {
      res.send({ status: 1 })
    })
    .error(function(e) {
      res.send({ status: 1 })
    })
})
