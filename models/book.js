const bookshelf = require('../config/bookshelf');

module.exports.Book = bookshelf.model('Book', {
  tableName: 'hashtags',
  hasTimestamps: true,

  hashtags() {
    return this.belongsToMany('Hashtag');
  },
  characters() {
    return this.hasMany('Character')
  },
  summary() {
    return this.hasOne('Summary')
  }
}, {
  // Static class properties and methods
})
