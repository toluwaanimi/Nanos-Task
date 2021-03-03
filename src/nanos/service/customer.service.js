const {Clients} = require('../utils/json/client')
const Stripe = require('../utils/json/stripe')

class CustomerService {
    static async createCustomer(data) {
        const existing = Clients.filter((customer) => customer.name === data.name)
        if (existing[0]) {
            return null
        }
        Clients.push(data)
    }

    static async getCustomers() {
        return Clients
    }

    static async getCustomer(data) {
        const customer = Clients.filter((customer) => customer.id === data.id);
        return customer[0]

    }
}

module.exports = CustomerService