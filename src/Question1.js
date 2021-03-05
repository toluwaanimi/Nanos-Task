const express = require('express')
const {handleError, handleSuccess} = require('../src/nanos/utils/response.helper')
const router = express.Router();
const request = require('request')
router.post('/insert_vat', async (req, res) => {
    let customers = null;
    request('http://localhost:3000/nanos/client', async (err, response, body) => {
        customers = JSON.parse(body)
        if (customers.status) {
            for (let i = 0; i < customers.data.length; i++) {
                if (!customers.data[i].swissVat) {
                    break;
                }
                request.post('http://localhost:3000/stripe/' + customers.data[i].id, {
                    form: {
                        key: 'tax_ids',
                        value: customers.data[i].swissVat
                    }
                })
            }
            return handleSuccess(req, res, 200, 'Successful')
        }else {
            return handleError(req,res,400,'Failed')
        }
    })
})


router.post('/set_tax_attempt', async (req,res)=>{
    let customers = null;
    request('http://localhost:3000/nanos/client', async (err, response, body) => {
        customers = JSON.parse(body)
        if (customers.status) {
            for (let i = 0; i < customers.data.length; i++) {
                let swiss = 'exempt';
                if (customers.data[i].is_Swiss) {
                    swiss = 'none'
                }
                request.post('http://localhost:3000/stripe/' + customers.data[i].id, {
                    form: {
                        key: 'tax_exempt',
                        value: swiss
                    }
                },)
            }
            return handleSuccess(req, res, 200, 'Successful')
        }
    })
})



module.exports = router