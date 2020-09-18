

// Многие ко многим: hashtags <-> books
// Многие ко многим: users <-> hashtags
// Один ко многим: book -> characters
// Один к одному: book <-> summary


const hashtagsSchema = table => {
  table.increments('id').primary()
  table.string('name', 50).notNullable()
}

const booksSchema = table => {
  table.increments('id').primary()
  table.string('name', 50).notNullable()
}

const usersSchema = table => {
  table.increments('id').primary()
  table.string('nickname', 50).notNullable()
  table.string('email', 50).unique().notNullable();
  table.string('password', 50).notNullable();
}

const hashtagsBooksSchema = table => {
  table.integer('hashtag_id').unsigned().references('id').inTable('hashtags')
  table.integer('book_id').unsigned().references('id').inTable('books')
}

const hashtagsUsersSchema = table => {
  table.integer('hashtag_id').unsigned().references('id').inTable('hashtags')
  table.integer('user_id').unsigned().references('id').inTable('users')
}

const charactersSchema = table => {
  table.increments('id').primary()
  table.string('name', 50).notNullable()
  table.integer('book_id').references('id').inTable('books')
}

const summariesSchema = table => {
  table.increments('id').primary()
  table.string('details', 500).notNullable()
  table.integer('book_id').references('id').inTable('books')
}


exports.up = function(knex) {
  return knex.schema
    .createTable('users', usersSchema(table))
    .createTable('hashtags', hashtagsSchema(table))
    .createTable('books', booksSchema(table))
    .createTable('hashtags_books', hashtagsBooksSchema(table))
    .createTable('hashtags_users', hashtagsUsersSchema(table))
    .createTable('characters', charactersSchema(table))
    .createTable('summaries', summariesSchema(table))
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('hashtags_books')
    .dropTableIfExists('hashtags_users')
    .dropTableIfExists('hashtags')
    .dropTableIfExists('books')
    .dropTableIfExists('characters')
    .dropTableIfExists('summaries')
    .dropTableIfExists('users')
};
