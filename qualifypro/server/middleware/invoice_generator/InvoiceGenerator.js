var fs = require('fs')
const path = require('path');
const { generate, BLANK_PDF } = require('@pdfme/generator');

const generateInvoice = async (pdfData) => {

    const fontArrayBuffer = fs.readFileSync('fonts/MontserratRegular.ttf').buffer;

    const font = {
        ShadeSansRegular: {
            data: fontArrayBuffer,
            fallback: true,
        }
    }
    const template = {
        basePdf: BLANK_PDF,
        "schemas": [
            {
                "Logo": {
                    "type": "text",
                    "position": {
                        "x": 149.97,
                        "y": 10.27
                    },
                    "width": 55.31,
                    "height": 10.42,
                    "alignment": "left",
                    "fontSize": 26,
                    "characterSpacing": 0,
                    "lineHeight": 1,
                    "fontColor": "#4d48ff",
                },
                "heading": {
                    "type": "text",
                    "position": {
                        "x": 9.95,
                        "y": 36.54
                    },
                    "width": 75.33,
                    "height": 12.28,
                    "alignment": "left",
                    "fontSize": 30,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "clientName": {
                    "type": "text",
                    "position": {
                        "x": 10.09,
                        "y": 52.2
                    },
                    "width": 68.07,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "InvoiceDate": {
                    "type": "text",
                    "position": {
                        "x": 100.94,
                        "y": 36.54
                    },
                    "width": 40.23,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "Idate": {
                    "type": "text",
                    "position": {
                        "x": 100.92,
                        "y": 42.79
                    },
                    "width": 46.1,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 11,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "InvoiceNumber": {
                    "type": "text",
                    "position": {
                        "x": 100.95,
                        "y": 54.44
                    },
                    "width": 46.11,
                    "height": 7,
                    "alignment": "left",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "Inumber": {
                    "type": "text",
                    "position": {
                        "x": 100.96,
                        "y": 61.68
                    },
                    "width": 46.11,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 9,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "Abn": {
                    "type": "text",
                    "position": {
                        "x": 100.96,
                        "y": 73.49
                    },
                    "width": 16.74,
                    "height": 7,
                    "alignment": "left",
                    "fontSize": 13,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "abnNumber": {
                    "type": "text",
                    "position": {
                        "x": 100.93,
                        "y": 80.21
                    },
                    "width": 46.11,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 11,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "Address": {
                    "type": "text",
                    "position": {
                        "x": 149.96,
                        "y": 36.55
                    },
                    "width": 50.06,
                    "height": 27.09,
                    "alignment": "left",
                    "fontSize": 15,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "divider": {
                    "type": "text",
                    "position": {
                        "x": 9.95,
                        "y": 117.59
                    },
                    "width": 190.05,
                    "height": 0.5,
                    "alignment": "left",
                    "fontSize": 13,
                    "characterSpacing": 0,
                    "lineHeight": 1,
                    "fontColor": "#000",
                    "backgroundColor": "#4d48ff"
                },
                "Description": {
                    "type": "text",
                    "position": {
                        "x": 9.9,
                        "y": 109.64
                    },
                    "width": 30.24,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "quantity": {
                    "type": "text",
                    "position": {
                        "x": 78.06,
                        "y": 109.54
                    },
                    "width": 26,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "Unitprice": {
                    "type": "text",
                    "position": {
                        "x": 107.96,
                        "y": 109.56
                    },
                    "width": 26.27,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "gst": {
                    "type": "text",
                    "position": {
                        "x": 133.34,
                        "y": 109.56
                    },
                    "width": 16.74,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "amount": {
                    "type": "text",
                    "position": {
                        "x": 164.99,
                        "y": 109.56
                    },
                    "width": 35,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "productName": {
                    "type": "text",
                    "position": {
                        "x": 9.9,
                        "y": 122
                    },
                    "width": 68.07,
                    "height": 13.6,
                    "alignment": "left",
                    "fontSize": 9,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "quantityValue": {
                    "type": "text",
                    "position": {
                        "x": 77.99,
                        "y": 121.62
                    },
                    "width": 26,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 9,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "unitPriceValue": {
                    "type": "text",
                    "position": {
                        "x": 107.92,
                        "y": 121.67
                    },
                    "width": 26,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 9,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "gstValue": {
                    "type": "text",
                    "position": {
                        "x": 129.92,
                        "y": 121.59
                    },
                    "width": 20.19,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 9,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "amountValue": {
                    "type": "text",
                    "position": {
                        "x": 149.91,
                        "y": 121.63
                    },
                    "width": 50.08,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 9,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "divider2": {
                    "type": "text",
                    "position": {
                        "x": 9.89,
                        "y": 134.56
                    },
                    "width": 190.05,
                    "height": 0.5,
                    "alignment": "left",
                    "fontSize": 13,
                    "characterSpacing": 0,
                    "lineHeight": 1,
                    "backgroundColor": "#4d48ff"
                },
                "subTotal": {
                    "type": "text",
                    "position": {
                        "x": 129.72,
                        "y": 137.35
                    },
                    "width": 25.18,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 13,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "subtotalValue": {
                    "type": "text",
                    "position": {
                        "x": 149.94,
                        "y": 137.25
                    },
                    "width": 50.08,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 13,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "totalgst": {
                    "type": "text",
                    "position": {
                        "x": 116.81,
                        "y": 146.56
                    },
                    "width": 38.17,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 13,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "GSTValue": {
                    "type": "text",
                    "position": {
                        "x": 165,
                        "y": 146.93
                    },
                    "width": 35,
                    "height": 6.2,
                    "alignment": "right",
                    "fontSize": 13,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "divider3": {
                    "type": "text",
                    "position": {
                        "x": 77.94,
                        "y": 157.2
                    },
                    "width": 122.05,
                    "height": 0.5,
                    "alignment": "left",
                    "fontSize": 13,
                    "characterSpacing": 0,
                    "lineHeight": 1,
                    "backgroundColor": "#4d48ff"
                },
                "total": {
                    "type": "text",
                    "position": {
                        "x": 117.9,
                        "y": 161.54
                    },
                    "width": 45.09,
                    "height": 7,
                    "alignment": "right",
                    "fontSize": 15,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "totalValue": {
                    "type": "text",
                    "position": {
                        "x": 165.02,
                        "y": 161.65
                    },
                    "width": 35,
                    "height": 7,
                    "alignment": "right",
                    "fontSize": 15,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "paymentMethod": {
                    "type": "text",
                    "position": {
                        "x": 10.13,
                        "y": 179.71
                    },
                    "width": 45.83,
                    "height": 6.98,
                    "alignment": "left",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "paymentType": {
                    "type": "text",
                    "position": {
                        "x": 10.13,
                        "y": 186.79
                    },
                    "width": 45.83,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 11,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "Status": {
                    "type": "text",
                    "position": {
                        "x": 10.06,
                        "y": 192.93
                    },
                    "width": 46.11,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 11,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "footer": {
                    "type": "text",
                    "position": {
                        "x": 9.98,
                        "y": 259.58
                    },
                    "width": 190.04,
                    "height": 30.26,
                    "alignment": "center",
                    "fontSize": 13,
                    "characterSpacing": 0,
                    "lineHeight": 1,
                    "backgroundColor": "#4d48ff",
                    "fontColor": "#ffffff"
                },
                "Contact us": {
                    "type": "text",
                    "position": {
                        "x": 9.95,
                        "y": 209.71
                    },
                    "width": 68.07,
                    "height": 7,
                    "alignment": "left",
                    "fontSize": 14,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "mobileNo": {
                    "type": "text",
                    "position": {
                        "x": 9.95,
                        "y": 216.82
                    },
                    "width": 68.07,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 11,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "email": {
                    "type": "text",
                    "position": {
                        "x": 9.9,
                        "y": 223.19
                    },
                    "width": 68.07,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 11,
                    "characterSpacing": 0,
                    "lineHeight": 1
                },
                "website": {
                    "type": "text",
                    "position": {
                        "x": 9.9,
                        "y": 229.56
                    },
                    "width": 68.07,
                    "height": 6.2,
                    "alignment": "left",
                    "fontSize": 11,
                    "characterSpacing": 0,
                    "lineHeight": 1
                }
            }
        ],
    };

    const inputs = [
        {
            "Logo": "QualifyPro",
            "heading": "TAX INVOICE",
            "clientName": "",
            "InvoiceDate": "Invoice Date",
            "Idate": "",
            "InvoiceNumber": "Invoice Number",
            "Inumber": "",
            "Abn": "ABN",
            "abnNumber": "40 092 024 407",
            "Address": "QualifyPro,\n12 Kent Street,\nSurry Hills,\nMelbourne,VIC,\n3290",
            "divider": " ",
            "Description": "Description",
            "quantity": "Quantity",
            "Unitprice": "Unit Price",
            "gst": "GST",
            "amount": "Amount AUD",
            "productName": "",
            "quantityValue": "",
            "unitPriceValue": "",
            "gstValue": "",
            "amountValue": "",
            "divider2": " ",
            "subTotal": "Subtotal",
            "subtotalValue": "",
            "totalgst": "TOTAL GST 10%",
            "GSTValue": "",
            "divider3": " ",
            "total": "TOTAL AUD",
            "totalValue": "",
            "paymentMethod": "Payment Method",
            "paymentType": "",
            "Status": "",
            "footer": "\n\nThank you for your purchase.\nIf you have any enquires do not hesitate to contact us.\n",
            "Contact us": "Contact Us",
            "mobileNo": "0456 123 774\n",
            "email": "qualifypro@gmail.com\n",
            "website": "qualifypro.com\n"
        }
    ];

    inputs[0].clientName = pdfData.clientName
    inputs[0].Idate = new Date().toLocaleDateString();
    inputs[0].Inumber = pdfData.Inumber
    inputs[0].productName = pdfData.productName
    inputs[0].quantityValue = `${pdfData.quantityValue}`
    inputs[0].unitPriceValue = `${pdfData.unitPriceValue}`
    inputs[0].gstValue = '10%'
    inputs[0].amountValue = `${pdfData.amountValue}`
    inputs[0].subtotalValue = `${pdfData.subtotalValue}`
    inputs[0].GSTValue = `${pdfData.GSTValue}`
    inputs[0].totalValue = `${pdfData.totalValue}`
    inputs[0].paymentType = pdfData.paymentType
    inputs[0].Status = `Status : ${pdfData.Status}`

    invoiceName = pdfData.Inumber

    const pdfsDir = path.join(__dirname, 'invoices');
    if (!fs.existsSync(pdfsDir)) {
        fs.mkdirSync(pdfsDir);
    }

    generate({ template, inputs, options: { font } }).then((pdf) => {
        fs.writeFileSync(path.join(pdfsDir, `${invoiceName}.pdf`), pdf);
    });

    const generateInvoiceFilePath = path.join(__dirname, 'invoices', `${invoiceName}.pdf`);
    if(fs.existsSync(generateInvoiceFilePath)){
        return generateInvoiceFilePath;
    }
}

module.exports = generateInvoice;