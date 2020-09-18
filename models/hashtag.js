const bookshelf = require('../config/bookshelf');

const Hashtag = bookshelf.model('Hashtag', {
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

module.exports = bookshelf.model('Hashtag', Hashtag);
