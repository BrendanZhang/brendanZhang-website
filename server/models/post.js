var Sequelize = require('sequelize')
var path = require('path')

var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'http://127.0.0.1:3000',
  dialect: 'sqlite',

  // SQLite only
  storage: path.join(__dirname, '../database/database.sqlite')
})

/* sequelize
  .authenticate()status
  .then(function(err) {
    console.log('Connection has been established successfully.')
  })
  .catch(function(err) {
    console.log('Unable to connect to the database:', err)
  }) */

var Post = sequelize.define('post', {
  title: {
    type: Sequelize.STRING
  },
  tags: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  introduce: {
    type: Sequelize.STRING
  }
})

Post.sync()
//Note.drop();
//Note.sync({force: true})
// // force: true will drop the table if it already exists
// Note.sync({force: true}).then(function () {
//   // Table created
//   return Note.create({
//     text: 'hello world'
//   });
// });

// Note.create({
//   text: 'haha'
// })

// Note.destroy({where:{text:'haha'}}, function(){
//   console.log('destroy...')
//   console.log(arguments)
// })
// Note.findAll({raw: true}).then(function(articles) {
//   console.log(articles)
// })

module.exports = Post
