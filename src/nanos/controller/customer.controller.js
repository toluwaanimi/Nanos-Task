const CustomerService = require('../service/customer.service')
const {handleError, handleSuccess} = require('../utils/response.helper')

class CustomerController {
    static async create(req, res, next) {
        const customer = await CustomerService.createCustomer(req.body);
        if (customer) {
            return handleSuccess(req, res, 201, 'successfully created client', customer)
        }
        return handleError(req, res, 400, 'Cannot create customer')
    }

    static async get(req, res) {
        const customers = await CustomerService.getCustomers()
        return handleSuccess(req, res, 200, 'Successfully', customers)
    }

    static async fetch(req, res) {
        const customer = await CustomerService.getCustomer({id: req.params.id})
        return handleSuccess(req, res, 200, 'Successfully', customer)

    }
}

module.exports = CustomerController