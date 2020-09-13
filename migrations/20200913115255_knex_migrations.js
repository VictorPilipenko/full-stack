

// Многие ко многим: hashtags <-> books
// Многие ко многим: books <-> authors
// Один ко многим: book -> characters
// Один к одному: character <-> theCharacterHasSuperpowers


exports.up = function(knex) {
  return knex.schema

    
    .createTable('hashtags', table => {
      table.increments('id').primary()
      table.text('name', 50)
        .notNullable(),
      table.timestamps(true, true)
    })

    .createTable('books', table => {
      table.increments(), // 'id' field
      table.text('name', 50)
        .notNullable(),
      table.timestamps(true, true)
    })

    // Многие ко многим: hashtags <-> books
    .createTable('hashtags_books', table => {
      table.integer('hashtag_id').unsigned().references('id').inTable('hashtags')
      table.integer('book_id').unsigned().references('id').inTable('books')
    })

    // Один ко многим: book -> characters
    .createTable('characters', table => {
      table.increments('id').primary()
      table.text('name', 50)
        .notNullable()
      table.timestamps(true, true)

      // Один ко многим: book -> characters
      table.integer('book_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('books')
    .dropTableIfExists('characters')
};
