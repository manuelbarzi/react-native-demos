module.exports = {
    pascal(text) {
        return text.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`).join('')
    },

    camel(text) {
        return text.split(' ').map((word, index) => index ? `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}` : word.toLowerCase()).join('')
    },

    snake(text) {
        return text.split(' ').map(word => word.toLowerCase()).join('_')
    },

    chain(text) {
        return text.split(' ').map(word => word.toLowerCase()).join('-')
    },

    constant(text) {
        return text.split(' ').map(word => word.toUpperCase()).join('_')
    }
}