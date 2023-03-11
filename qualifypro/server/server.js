const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('./middleware/logger/Logger');
const config = require('./config');
const path = require('path');
var fs = require('fs')
const createCheckoutSession = require('./api/checkout');
const fetchClientDetails = require('./api/fetchClientDetails');
const downloadReceipt = require('./api/downloadReceipt');

const app = express();

app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf
    }
}))
app.use(cors({ origin: 'https://localhost:3000' }))

app.use(bodyParser.json());
app.use(logger)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/createSession', createCheckoutSession);

app.post('/getSessionDetails', fetchClientDetails);

app.get('/download_receipt', downloadReceipt);

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
});