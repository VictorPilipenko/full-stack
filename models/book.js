const bookshelf = require('../config/bookshelf');

const Book = bookshelf.model('Book', {
  tableName: 'hashtags',
  hasTimestamps: true,

  books() {
    return this.belongsToMany('User')
  },
  users() {
    return this.belongsToMany('Hashtag');
  }
}, {
  // Static class properties and methods
})

module.exports = bookshelf.model('Book', Book);
