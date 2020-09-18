const { body } = require('express-validator');

const createHashtag = [
	body('name').trim().notEmpty()
]

const updateHashtag = [
	body('name').optional().trim().notEmpty()
];

module.exports = {
  createHashtag,
	updateHashtag,
};
