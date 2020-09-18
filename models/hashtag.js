const bookshelf = require('../config/bookshelf');

module.exports.Hashtag = bookshelf.model('Hashtag', {
  tableName: 'hashtags',
  hasTimestamps: true,

  users() {
    return this.belongsToMany('User')
  },
  books() {
    return this.belongsToMany('Book');
  }
}, {
  // Static class properties and methods
})
