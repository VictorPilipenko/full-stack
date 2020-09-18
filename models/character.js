const bookshelf = require('../config/bookshelf');

module.exports.Character = bookshelf.model('Character', {
  tableName: 'characters',
  hasTimestamps: true,

  book() {
    return this.belongsTo('Book')
  }
}, {
  // Static class properties and methods
})
