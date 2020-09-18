const bookshelf = require('../config/bookshelf');

const Book = bookshelf.model('Book', {
  tableName: 'hashtags',
  hasTimestamps: true,

  hashtags() {
    return this.belongsToMany('Hashtag');
  },
  characters() {
    return this.hasMany('Character')
  }
}, {
  // Static class properties and methods
})

module.exports = bookshelf.model('Book', Book);
