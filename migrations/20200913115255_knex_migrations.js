
exports.up = function(knex) {
  return knex.schema
    .createTable('hashtags', table => {
      table.increments(), // 'id' field
      table.text('name', 50)
        .notNullable(),
      table.timestamps(true, true)
    })
    .createTable('books', table => {
      table.increments(), // 'id' field
      table.text('name', 50)
        .notNullable()
        .index(),
      table.timestamps(true, true)

      // foreign key to 'hashtags'
      table.integer('id_hashtag')
        .unsigned()
        .references('id')
        .inTable('hashtags')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('books')
    .dropTableIfExists('hashtags')
};
