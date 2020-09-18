const knex = require('knex')
const config = require('./knexfile')
const bookshelf = require('bookshelf')(knex(config.development));

bookshelf.plugin('registry');
bookshelf.plugin('pagination');

module.exports = bookshelf;
