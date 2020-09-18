const bcrypt = require('bcrypt');
const bookshelf = require('../config/bookshelf');

module.exports.User = bookshelf.model('User', {
  tableName: 'users',
  hidden: ['password'],
  hasTimestamps: true,

  hashtags() {
    return this.belongsToMany('Hashtag');
  }
}, {
  // Static class properties and methods
  hashSaltRounds: 10,
  async login(email, password) {
    const user = await new this({ email }).fetch({ require: false })

    if (!user) {
      return false
    }

    return await bcrypt.compare(password, user.get('password'))
      ? user
      : false
  }
})
