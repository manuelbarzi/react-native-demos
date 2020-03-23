const { registerUser } = require('.')
const { random } = Math
const { users } = require('my-data')
const { expect } = require('chai')

describe('register user', () => {
    let name, surname, username, password

    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`

        users.length = 0
    })

    it('should succeed on correct user data', async () => {
        await registerUser(name, surname, username, password)

        expect(users).to.have.lengthOf(1)

        const [user] = users
        expect(user.id).to.exist
        expect(user.name).to.equal(name)
        expect(user.surname).to.equal(surname)
        expect(user.username).to.equal(username)
        expect(user.password).to.equal(password)
    })
})