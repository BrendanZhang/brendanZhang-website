var express = require('express')
var router = express.Router()
var Post = require('../models/post')

router.get('/admin/posts', function(req, res, next) {
  var opts = { raw: true }
  Post.findAll(opts)
    .then(function(posts) {
      console.log(posts)
      res.send({ status: 0, data: posts })
    })
    .catch(function() {
      res.send({ status: 1, errorMsg: '数据库异常' })
    })
})

router.post('/admin/add'),
  function(req, res, next) {
    var post = req.body
    var username = req.session.user.username
    console.log({
      title: title,
      tags: tags,
      introduce: introduce,
      content: content
    })
    Post.create({
      title: post.title,
      tags: post.tags,
      introduce: post.introduce,
      content: post.content
    })
      .then(function() {
        console.log(arguments)
        res.send({ status: 0 })
      })
      .catch(function() {
        res.send({ status: 1, errorMsg: '数据库异常或者你没有权限' })
      })
  }
