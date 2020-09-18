const bookshelf = require('../config/bookshelf');

module.exports.Summary = bookshelf.model('Summary', {
  tableName: 'summaries',
  hasTimestamps: true,

  book() {
    return this.belongsTo('Book')
  }
}, {
  // Static class properties and methods
})
