const { body } = require('express-validator');

const createBook = [
	body('name').trim().notEmpty()
];

const updateBook = [
	body('name').optional().trim().notEmpty()
];

module.exports = {
  createBook,
	updateBook,
};

