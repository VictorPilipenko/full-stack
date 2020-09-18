const { body } = require('express-validator');
const User = require('../models/user')

const checkEmail = async email => {
	const user = await new User({ email }).fetch();

	if (user) {
		return Promise.reject('email already exists')
	}
}

const createUser = [
	body('email').trim().isLength({ min: 8 }).custom(checkEmail),
	body('password').trim().isLength({ min: 8 }),
	body('nickname').trim().isLength({ min: 2 })
]

const updateUser = [
	body('nickname').optional().trim().isLength({ min: 2 })
]


module.exports = {
  createUser,
  updateUser
};
