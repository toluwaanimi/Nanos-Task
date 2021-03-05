const express = require('express');
const router = express.Router();
const customerRoutes = require('./customer.routes')
const campaignRoutes = require('./campaign.routes')
const stripeRoutes = require('./stripe.routes')
const invoiceRoutes = require('./invoice.routes')
router.use('/nanos/client', customerRoutes)
router.use('/nanos/campaign', campaignRoutes)
router.use('/stripe', stripeRoutes)
router.use('/question1', require('../../Question1'))
router.use('/question2', require('../../Question2'))
router.use('/nanos/invoice', invoiceRoutes)
module.exports = router