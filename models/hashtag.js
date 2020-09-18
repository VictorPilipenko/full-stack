const bookshelf = require('../config/bookshelf');

const Hashtag = bookshelf.model('Hashtag', {
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

module.exports = bookshelf.model('Hashtag', Hashtag);
