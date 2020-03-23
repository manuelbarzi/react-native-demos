const { users } = require('my-data')
const { validate } = require('my-utils')

module.exports = (name, surname, username, password) => {
    validate.string(name, 'name')
    validate.string(surname, 'surname')
    validate.string(username, 'username')
    validate.string(password, 'password')

    return (async () => {
        const user = users.find(user => user.username === username)

        if (user) throw new Error(`username ${username} already exists`)

        users.push({ id: Date.now(), name, surname, username, password })
    })()
}