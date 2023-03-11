const stripeApi = require('./stripe');
const config = require('../config');

const createCheckoutSession = async (req, res) => {
    const domainUrl = config.webUrl;
    const { clientdata, coursedata } = req.body;
    const { line_items, email } = coursedata;
    if (!line_items || !email) {
        return res.status(400).json({ error: 'Missing parameters' });
    }
    
    let session;
    try {
        session = await stripeApi.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            invoice_creation:{
                enabled: true,
            },
            customer_email: email,
            success_url: `${domainUrl}/payment_success/{CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainUrl}/payment_cancel`,
            shipping_address_collection: { allowed_countries: ['AU'] },
            phone_number_collection: {
                enabled: true,
            },
        });
        res.status(200).json({ id: session.id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An unexpected error occurred when creaating the session ID.' });
    }
}

module.exports = createCheckoutSession;