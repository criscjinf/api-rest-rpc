const usersSeeds = require("../seeds/users-seeds");


class Users {
    includeAddressUrl() {
        usersSeeds.forEach((user) => {
            if (user.address && !user.address.hasOwnProperty('uri')) {
                user.address.uri = `http://localhost:6000/users/${user.id_user}/address/${user.address.id_address}`
            }
        })
    }

    findAll() {
        this.includeAddressUrl()
        return usersSeeds
    }

    find(id_user) {
       this.includeAddressUrl()
       return usersSeeds.find((user) => user.id_user === parseInt(id_user)) 
    }

    push(user) {
        if (!user.hasOwnProperty('address')) {
            user.address = []
        }
        usersSeeds.push(user)
    }

    remove(id_user) {
        const user = this.find(id_user)
        if (user) usersSeeds.pop(user)
        return user
    }
}

module.exports = new Users()