const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('./middleware/logger/Logger');
const config = require('./config');
const generateInvoice = require('./middleware/invoice_generator/InvoiceGenerator');

const app = express();

app.use(express.json())
app.use(cors(
    { origin: 'https://localhost:3000' }
))
app.use(bodyParser.json());
app.use(logger)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/generateInvoice', generateInvoice);

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
});