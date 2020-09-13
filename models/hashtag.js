const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

const add = async hashtag => {
  return [id] = await db('hashtags').insert(hashtag)
}

const find = async () => {
  return await db('hashtags')
}

const findById = async id => {
  return await db('hashtags')
    .where({ id })
    .first()
}

const remove = async id => {
  return await db('hashtags')
    .where({ id })
    .del()
}

module.exports = {
  add,
  find,
  findById,
  remove
}