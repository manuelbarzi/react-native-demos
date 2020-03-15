const logic = require('.')
const { loginUser } = logic
const { random } = Math
const { users } = require('my-data')
const { expect } = require('chai')
const AsyncStorage = require('not-async-storage')
logic.__context__.storage = AsyncStorage

describe('register user', () => {
    let id, name, surname, username, password

    beforeEach(() => {
        id = Date.now()
        name = `name-${random()}`
        surname = `surname-${random()}`
        username = `username-${random()}`
        password = `password-${random()}`

        users.push({ id, name, surname, username, password })
    })

    it('should succeed on correct user data', async () => {
        await loginUser(username, password)

        const _id = await logic.__context__.storage.getItem('id')
        expect(_id).to.equal(id.toString())
    })
})