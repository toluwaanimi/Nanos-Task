const express = require('express');
const router = express.Router();
const InvoiceController = require('../controller/invoice.controller')

router.post('/', InvoiceController.render_tax_invoice)

module.exports = router