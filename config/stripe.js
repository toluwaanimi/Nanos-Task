const Config = require('./env.config')
const Stripe = require('stripe')(Config.STRIPE_KEY)



module.exports = {
    Stripe
}


