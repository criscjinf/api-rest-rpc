const { param } = require("../routes/routes")
const citiesSeeds = require("../seeds/cities-seeds")
const users = require("./users")


class UserAddress {
    findAll(params) {
        const user = params && params.length > 0 ? users.find(params[0]) : null
        return user ? user.address : null
    }

    findOne(params, id_address) {
        const address = this.findAll(params)
        return address && address.length > 0 ? address.find(add => add.id_address = id_address) : null
    }

    push(body, params) {
        const address = this.findAll(params)

        if (address) {
            const newAddress = { ...body}
            delete newAddress['id_city']
            newAddress.city = {... citiesSeeds.find(city => city.id_city == body.id_city)}

            address.push(newAddress)
        }
    }
}

module.exports = new UserAddress()