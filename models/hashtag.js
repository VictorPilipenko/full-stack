const bcrypt = require('bcrypt');
const bookshelf = require('../config/bookshelf');

const Hashtag = bookshelf.model('Hashtag', {
  tableName: 'hashtags',
  hasTimestamps: true,

  books() {
    return this.belongsToMany('Author')
  }

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
