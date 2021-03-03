const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ads_Campaign = new Schema({
    name: {type: String, default: ''},
    client_id: {type: Schema.Types.ObjectId, ref: 'customer'},
    stripe_charge_id: {type: String, default: ''}
}, {timestamps: true})

module.exports = mongoose.model('ads_campaign', Ads_Campaign)