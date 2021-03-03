const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    email : {type : String, required : true},
    name: {type: String, default: ''},
    country: {type: String, default: 'usa'},
    vat_number: {type: String, default: '', required : false},
    stripe_customer_id: {type: String, default: ''}
}, {timestamps: true})


module.exports = mongoose.model('customer', CustomerSchema);
