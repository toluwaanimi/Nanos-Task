const express = require('express');
const router = express.Router();
const customerRoutes = require('./customer.routes')
const campaignRoutes = require('./campaign.routes')
router.use('/customer', customerRoutes)
router.use('/campaign', campaignRoutes)

module.exports = router