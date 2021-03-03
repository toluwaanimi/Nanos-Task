const axios = require('axios')

async function updateCustomerTaxExempt() {
    const customer = await axios.get('/customer/');

}