const { users } = require('my-data')
const { validate } = require('my-utils')
const context = require('./context')

module.exports = function (username, password) {
    validate.string(username, 'username')
    validate.string(password, 'password')

    return (async () => {
        const user = users.find(user => user.username === username && user.password === password)

        if (!user) throw new Error(`wrong credentials`)

        await this.storage.setItem('id', user.id.toString())
    })()
}.bind(context)