const express = require('express');
const router = express.Router();
const CampaignService = require('../controller/campaign.controller')

// router.post('/', CampaignService.create)
router.get('/', CampaignService.get)
router.get('/:id', CampaignService.fetch)

module.exports = router