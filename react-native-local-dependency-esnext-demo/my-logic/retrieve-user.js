const { users } = require('my-data')
const context = require('./context')

module.exports = async function () {
    const id = await this.storage.getItem('id')

    const user = users.find(user => user.id.toString() === id)

    if (!user) throw new Error(`user with id ${id} not found`)

    const { name, surname, username } = user

    return { name, surname, username }
}.bind(context)