const { body } = require('express-validator');

const createCharacter = [
	body('name').trim().isLength({ min: 2 })
];

const updateCharacter = [
	body('name').optional().trim().isLength({ min: 2 })
];

module.exports = {
  createCharacter,
  updateCharacter
};
