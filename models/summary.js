const bookshelf = require('../config/bookshelf');

const Summary = bookshelf.model('Summary', {
  tableName: 'summaries',
  hasTimestamps: true,

  book() {
    return this.belongsTo('Book')
  }
}, {
  // Static class properties and methods
})

module.exports = bookshelf.model('Summary', Summary);
