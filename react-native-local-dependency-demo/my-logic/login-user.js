const { users } = require('my-data')
const { validate } = require('my-utils')
const context = require('./context')

module.exports = function (username, password) {
    validate.string(username, 'username')
    validate.string(password, 'password')

    return new Promise((resolve, reject) => {
        const user = users.find(user => user.username === username && user.password === password)

        if (!user) return reject(`wrong credentials`)

        this.storage.setItem('id', user.id.toString())
            .then(resolve)
            .catch(reject)
    })
}.bind(context)