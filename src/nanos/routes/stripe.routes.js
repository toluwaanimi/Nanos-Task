const express = require('express');
const router = express.Router();
const StripeController = require('../controller/stripe.controller')

router.post('/:id', StripeController.update)


module.exports = router