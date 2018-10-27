const keys = require('../config/key');
const stripe = require('stripe')(keys.stripeSecretKey);
const path = require('path');
//express does not automatically parse the post require body
module.exports = app => {
    app.post('/api/stripe', (req, res) => {
        //body parser document
        console.log(req.body);
    });
}