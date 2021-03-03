const express = require('express');
const router = express.Router();
const CustomerService = require('../controller/customer.controller')

router.post('/', CustomerService.create)
router.get('/', CustomerService.get)
router.get('/:id', CustomerService.fetch)

module.exports = router