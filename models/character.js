const bookshelf = require('../config/bookshelf');

const Character = bookshelf.model('Character', {
  tableName: 'characters',
  hasTimestamps: true,

  book() {
    return this.belongsTo('Book')
  }
}, {
  // Static class properties and methods
})

module.exports = bookshelf.model('Character', Character);
