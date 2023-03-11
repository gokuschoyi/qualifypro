const path = require('path');
var fs = require('fs')

const downloadReceipt = async (req, res) => {
    const invoiceId = req.query.invoiceId;
    const filePath = path.join(__dirname, '../middleware/invoice_generator/invoices', `${invoiceId}.pdf`);
    if (fs.existsSync(filePath)) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=' + `${invoiceId}.pdf`);
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    }
    else {
        res.status(404).send('File not found');
    }
}

module.exports = downloadReceipt;