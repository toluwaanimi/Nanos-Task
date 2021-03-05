const express = require('express')
const {handleError, handleSuccess} = require('../src/nanos/utils/response.helper')
const router = express.Router();
const request = require('request')


router.post('/create_tax', async (req, res) => {
    const id = req.body.ad_campaign_id
    let reply = null
    let campaign = null
    request('http://localhost:3000/nanos/campaign/' + id, async (err, response, body) => {
        reply = JSON.parse(body)
        if (!reply.status) {
            return handleError(req, res, 400, 'Invalid Id')
        }
        campaign = reply.data
        request('http://localhost:3000/nanos/client/' + campaign.client_id, (err, http, bodyReply) => {
            let v = JSON.parse(bodyReply).data
            let amount = 2000
            let vat_Amount = (7.7 / 100) * amount;
            let net_Amount = amount - vat_Amount
            request.post('http://localhost:3000/nanos/invoice', {
                form: {
                    client_name: v.name,
                    email: v.email,
                    address: v.address,
                    campaign_name: campaign.name,
                    invoice_currency: 'USD',
                    invoice_amount: amount,
                    vat_amount: vat_Amount,
                    net_amount: net_Amount
                }
            }, (err, httpR, message) => {
                let d = JSON.parse(message).data
                return handleSuccess(req, res, 200, 'Your invoice is', {
                    tax_invoice: d
                })
            })
        })
    })
})

module.exports = router