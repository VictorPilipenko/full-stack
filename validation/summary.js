const { body } = require('express-validator');

const createSummary = [
	body('details').trim().notEmpty()
]

const updateSummary = [
	body('details').optional().trim().notEmpty()
];

module.exports = {
	createSummary,
  updateSummary,
};
