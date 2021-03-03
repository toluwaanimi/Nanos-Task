const env = require('env-var');
const {config} = require('dotenv')
config()

const STRIPE_KEY = env.get('STRIPE_KEY').required().asString()

module.exports = {
    STRIPE_KEY
}