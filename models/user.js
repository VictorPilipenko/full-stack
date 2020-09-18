const bcrypt = require('bcrypt');
const bookshelf = require('../config/bookshelf');

const User = bookshelf.model('User', {
  tableName: 'users',
  hidden: ['password'],
  hasTimestamps: true,

  hashtags() {
    return this.hasMany('Hashtag');
  },

  initialize() {
    this.on('saving', model => new User({ email: model.get('email') })
      .fetch()
      .then(user => {
        if (user) throw new Error('That email address already exists')
      }))
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

module.exports = bookshelf.model('User', User);
