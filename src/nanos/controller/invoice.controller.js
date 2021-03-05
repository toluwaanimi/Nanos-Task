const {handleError, handleSuccess} = require('../utils/response.helper')
const InvoiceService = require('../service/invoice.service')

class InvoiceController {
    static async render_tax_invoice(req, res) {
        const response = await InvoiceService.render_tax_invoice(req.body)
        return handleSuccess(req, res, 200, 'Invoice generated', response)
    }
}

module.exports = InvoiceController