const Stripe = require('../utils/json/stripe')
const {Campaign} = require('../utils/json/campaign')

class CampaignService {

    static async getCampaigns() {
        let array = [];
        for (let i = 0; i < Campaign.length; i++) {
            const o = {
                id: Campaign[i].id
            }
            array.push(o)
        }
        return array
    }

    static async getCampaign(data) {
        const campaign = Campaign.filter((campaign) => campaign.id === data.id)
        if (!campaign[0]) {
            return null
        }
        return  campaign[0]
        // const transaction = Stripe.transaction.filter((transaction) => transaction.id === campaign[0].stripe_charge_id);
        // return {
        //     ...campaign[0],
        //     transaction: transaction
        // }


    }
}

module.exports = CampaignService