const {handleError, handleSuccess} = require('../utils/response.helper')
const CampaignService = require('../service/campaign.service');

class CampaignController {
    static async fetch(req, res) {
        const campaign = await CampaignService.getCampaign({id: req.params.id})
        if (campaign) {
            return handleSuccess(req, res, 200, 'Successfully', campaign)
        }
        return handleError(req, res, 404, 'Invalid Campaign')
    }

    static async get(req, res) {
        const campaign = await CampaignService.getCampaigns()
        if (campaign) {
            return handleSuccess(req, res, 200, 'Successfully', campaign)
        }
        return handleError(req, res, 200, 'Invalid Campaign')
    }
}

module.exports = CampaignController