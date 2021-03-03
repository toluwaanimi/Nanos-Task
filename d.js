const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
stripe.paymentMethods.list({
    customer: 'cus_J2ekYDap3WptlL',
    type: "card"
}).then(
    //console.log
);

stripe.customers.list({
    limit: 3,
}).then(
    res =>{
        console.log(res)
    }
);



//  stripe.customers.create(
//      {
//          description :'hello'
//      }
// ).then(
//     res =>{
//         console.log(res.id)
//         stripe.charges.create({
//             amount: 1000,
//             currency: 'usd',
//             source: 'tok_mastercard',
//             description: 'My First Test Charge (created for API docs)',
//         }).then(
//             res => {
//              //   console.log(res)
//             }
//         );
//     }
// );
//
// try {
//    stripe.paymentIntents.create({
//         amount: 1099,
//         currency: 'usd',
//         customer: 'cus_J2ekYDap3WptlL',
//         payment_method: 'card',
//         off_session: true,
//         confirm: true,
//     }).then(
//         res => {
//             console.log(res)
//         }
//    );
// } catch (err) {
//     // Error code will be authentication_required if authentication is needed
//     console.log('Error code is: ', err.code);
//     const paymentIntentRetrieved =  stripe.paymentIntents.retrieve(err.raw.payment_intent.id);
//     console.log('PI retrieved: ', paymentIntentRetrieved.id);
// }