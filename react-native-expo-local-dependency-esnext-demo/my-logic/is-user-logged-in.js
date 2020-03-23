const context = require('./context')

module.exports = async function () {
    return await !!this.storage.getItem('id')
}.bind(context)