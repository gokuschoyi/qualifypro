const stripeApi = require('./stripe');
const generateInvoice = require('../middleware/invoice_generator/InvoiceGenerator');

const fetchClientDetails = async (req, res) => {
    const { session_id } = req.body;
    // console.log(session_id)
    if (!session_id) {
        return res.status(400).json({ error: 'Missing parameters' });
    }
    let data;

    try {
        var userData = {};
        var pdfData = {};
        data = await stripeApi.checkout.sessions.retrieve(session_id, { expand: ['line_items'] });

        invoiceId = data.invoice
        invoiceData = await stripeApi.invoices.retrieve(invoiceId)

        pdfData.clientName = data.customer_details.name;
        pdfData.Inumber = invoiceId;
        pdfData.productName = data.line_items.data[0].description;
        pdfData.quantityValue = data.line_items.data[0].quantity;
        pdfData.unitPriceValue = Math.round(((data.line_items.data[0].amount_total) / 1.1) / 100);
        pdfData.amountValue = Math.round(((data.line_items.data[0].amount_total) / 1.1) / 100);
        pdfData.subtotalValue = Math.round(((data.line_items.data[0].amount_total) / 1.1) / 100);
        pdfData.GSTValue = (Math.round(((data.line_items.data[0].amount_total) / 1.1) / 100) * 0.1);
        pdfData.totalValue = (data.amount_total / 100);
        pdfData.paymentType = data.payment_method_types[0];
        pdfData.Status = data.payment_status;

        await generateInvoice(pdfData);

        userData.amount_subtotal = data.amount_subtotal;
        userData.user_name = data.customer_details.name;
        userData.address = data.customer_details.address;
        userData.user_email = data.customer_details.email;
        userData.course_description = data.line_items.data[0].description;
        userData.stripe_receipt = invoiceData.invoice_pdf;
        userData.payment_status = data.payment_status;
        userData.invoice_id = invoiceId;

        res.status(200).json({ userData });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An unexpected error occurred when fetching the client details.' });
    }
}

module.exports = fetchClientDetails;