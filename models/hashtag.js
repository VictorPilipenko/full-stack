const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

const add = async hashtag => {
  return [id] = await db('hashtags').insert(hashtag)
}

module.exports = {
  add
}