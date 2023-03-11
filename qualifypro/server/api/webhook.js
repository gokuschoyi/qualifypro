const stripe = require('./stripe')

const webhook = (req, res) => {
    const sig = req.headers['stripe-signature']
    let event
    try {
        event = stripe.webhooks.constructEvent(
            req['rawBody'], sig, process.env.STRIPE_WEBHOOK_KEY)
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`)
    }
    console.log(event.type)
    console.log('____________________________________________________')
    // Handle the checkout.session.completed event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
            // console.log(paymentIntent) #has address and other info
            
            break;
        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            // Then define and call a method to handle the successful attachment of a PaymentMethod.
            // handlePaymentMethodAttached(paymentMethod);
            break;
        default:
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`);
    }
    res.send();
}

module.exports = webhook;