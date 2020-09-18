const config = require('./knexfile')
const knex = require('knex')(config.development)
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
