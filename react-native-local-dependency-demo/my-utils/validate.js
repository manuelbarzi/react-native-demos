module.exports = {
    string(target, name, notEmpty = true) {
        this.type(target, name, String)

        if (notEmpty && !target.trim()) throw new Error(`${name} is empty`)
    },

    type(target, name, type) {
        if (type === String || type === Number || type === Boolean) {
            type = type.name.toLowerCase()

            if (typeof target !== type) throw new TypeError(`${name} ${target} is not a ${type}`)
        } else if (!(target instanceof type)) throw new TypeError(`${name} ${target} is not a ${type.name}`)
    }
}