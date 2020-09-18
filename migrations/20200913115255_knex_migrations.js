

// Многие ко многим: hashtags <-> books
// Один ко многим: user -> hashtags
// Один к одному: book <-> summary


const hashtagsSchema = table => {
  table.increments('id').primary()
  table.string('name', 50).notNullable()
}

const booksSchema = table => {
  table.increments('id').primary()
  table.string('name', 50).notNullable()
}

const hashtagsBooksSchema = table => {
  table.integer('hashtag_id').unsigned().references('id').inTable('hashtags')
  table.integer('book_id').unsigned().references('id').inTable('books')
}

const summariesSchema = table => {
  table.increments('id').primary()
  table.string('details', 500).notNullable()
  table.integer('book_id').unique().references('id').inTable('books')
}

const usersSchema = table => {
  table.increments('id').primary()
  table.string('nickname', 50).notNullable()
  table.string('email', 50).unique().notNullable();
  table.string('password', 50).notNullable();
  table.integer('hashtag_id').references('id').inTable('hashtags')
}

exports.up = function(knex) {
  return knex.schema
    .createTable('hashtags', hashtagsSchema(table))
    .createTable('books', booksSchema(table))
    .createTable('hashtags_books', hashtagsBooksSchema(table))
    .createTable('summaries', summariesSchema(table))
    .createTable('users', usersSchema(table))
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('hashtags_books')
    .dropTableIfExists('hashtags')
    .dropTableIfExists('books')
    .dropTableIfExists('summaries')
};
