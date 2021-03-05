const {handleError, handleSuccess} = require('../utils/response.helper')
const StripeService = require('../service/stripe.service')


class StripeController{
    static async update(req,res){
        const response = await StripeService.updateCustomer(req.params.id.toString(), req.body.key, req.body.value)
        if (response){
            return handleSuccess(req,res,200, 'Successfully updated record', response)
        }
        return handleError(req,res,400, 'Failed')
    }
}

module.exports = StripeController