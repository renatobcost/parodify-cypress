
var faker =  require('faker')

export default {

    user: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            email: faker.internet.email(firstName, lastName),
            password: faker.internet.password()
        }

        return data

    }
}



