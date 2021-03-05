

class InvoiceService{
    static async render_tax_invoice(data){
        console.log(data)
        return '$30,000'
    }
}

module.exports = InvoiceService