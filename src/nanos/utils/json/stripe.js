const customers = [
    {
        "id": "cus_J2PYVowtw5R1fX",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1614639651,
        "currency": null,
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": "customer@example.com",
        "invoice_prefix": "5F7599C2",
        "invoice_settings": {
            "custom_fields": null,
            "default_payment_method": null,
            "footer": null
        },
        "livemode": false,
        "metadata": {},
        "name": null,
        "next_invoice_sequence": 1,
        "phone": null,
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none"
    }
]

const transaction = [
    {
        "id": "ch_1IQZSqFkVPFmghtIUQH9Q7wb",
        "object": "charge",
        "amount": 1000,
        "amount_captured": 1000,
        "amount_refunded": 1000,
        "application": null,
        "application_fee": null,
        "application_fee_amount": null,
        "balance_transaction": "txn_1IQZSqFkVPFmghtINDo6aJTp",
        "billing_details": {
            "address": {
                "city": null,
                "country": null,
                "line1": null,
                "line2": null,
                "postal_code": "94107",
                "state": null
            },
            "email": null,
            "name": null,
            "phone": null
        },
        "calculated_statement_descriptor": "Stripe",
        "captured": true,
        "created": 1614696284,
        "currency": "usd",
        "customer": null,
        "description": "Created by stripe.com/docs demo",
        "destination": null,
        "dispute": null,
        "disputed": false,
        "failure_code": null,
        "failure_message": null,
        "fraud_details": {},
        "invoice": null,
        "livemode": false,
        "metadata": {},
        "on_behalf_of": null,
        "order": null,
        "outcome": {
            "network_status": "approved_by_network",
            "reason": null,
            "risk_level": "normal",
            "risk_score": 47,
            "seller_message": "Payment complete.",
            "type": "authorized"
        },
        "paid": true,
        "payment_intent": "pi_1IQZS2FkVPFmghtIywFAtQ9j",
        "payment_method": "pm_1IQZSpFkVPFmghtIHCJW3nAE",
        "payment_method_details": {
            "card": {
                "brand": "visa",
                "checks": {
                    "address_line1_check": null,
                    "address_postal_code_check": "pass",
                    "cvc_check": "pass"
                },
                "country": "US",
                "exp_month": 8,
                "exp_year": 2024,
                "fingerprint": "3vtxMu5zFugbM9Y8",
                "funding": "credit",
                "installments": null,
                "last4": "4242",
                "network": "visa",
                "three_d_secure": null,
                "wallet": null
            },
            "type": "card"
        },
        "receipt_email": null,
        "receipt_number": null,
        "receipt_url": "https://pay.stripe.com/receipts/acct_1H0Z3vFkVPFmghtI/ch_1IQZSqFkVPFmghtIUQH9Q7wb/rcpt_J2emj60eAIeyNBFf4xnnLNSNEnkvOND",
        "refunded": true,
        "refunds": {
            "object": "list",
            "data": [
                {
                    "id": "re_1IQZiKFkVPFmghtIiOw08cTe",
                    "object": "refund",
                    "amount": 1000,
                    "balance_transaction": "txn_1IQZiKFkVPFmghtIvQpGWb7o",
                    "charge": "ch_1IQZSqFkVPFmghtIUQH9Q7wb",
                    "created": 1614697244,
                    "currency": "usd",
                    "metadata": {},
                    "payment_intent": "pi_1IQZS2FkVPFmghtIywFAtQ9j",
                    "reason": "duplicate",
                    "receipt_number": null,
                    "source_transfer_reversal": null,
                    "status": "succeeded",
                    "transfer_reversal": null
                }
            ],
            "has_more": false,
            "total_count": 1,
            "url": "/v1/charges/ch_1IQZSqFkVPFmghtIUQH9Q7wb/refunds"
        },
        "review": null,
        "shipping": null,
        "source": null,
        "source_transfer": null,
        "statement_descriptor": null,
        "statement_descriptor_suffix": null,
        "status": "succeeded",
        "transfer_data": null,
        "transfer_group": null
    }
]

module.exports = {
    customers, transaction
}