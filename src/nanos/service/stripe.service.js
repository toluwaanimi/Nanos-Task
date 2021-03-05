const Stripe = require('../utils/json/stripe')
const {Clients} = require('../utils/json/client')


 class StripeService {
    static async updateCustomer(id, key, value) {
        const client = Clients.filter((customer) => customer.id === id)
        if (!client[0]){
            return null
        }
        const customer = Stripe.customers.filter((customer) => customer.id === client[0].stripe_customer_id);
        if (!customer[0]) {
            return null
        }
        customer[0][key] = value
        return customer[0]
    }
}
module.exports = StripeService