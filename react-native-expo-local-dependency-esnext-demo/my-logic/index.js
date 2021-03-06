const context = require('./context')

module.exports = {
    get __context__() { return context },
    loginUser: require('./login-user'),
    registerUser: require('./register-user'),
    retrieveUser: require('./retrieve-user'),
    logoutUser: require('./logout-user'),
    isUserLoggedIn: require('./is-user-logged-in')
}