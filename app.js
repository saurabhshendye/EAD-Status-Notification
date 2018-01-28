var rus = require('req-uscis-status')
var AWS = require('aws-sdk')

var fs = require("fs"),
    json;

AWS.config.loadFromPath('aws-config.json');
json = readJsonFileSync('config.json')


rus.getStatus(json.receiptNum, 
    function(err, statusObject) { 

        var params = {
            Destination: { /* required */
                ToAddresses: [
                json.maillist[0],
                /* more items */
                ]
            },
            Message: { /* required */
                Body: { /* required */
                Text: {
                    Charset: "UTF-8",
                    Data: "EAD status: \n" + statusObject.statusLongText
                }
                },
                Subject: {
                Charset: 'UTF-8',
                Data: 'EAD Status ' + statusObject.statusShortText
                }
                },
            Source: json.usename
        };

        var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

        sendPromise.then(
            function(data) {
              console.log(data.MessageId);
            }).catch(
              function(err) {
              console.error(err, err.stack);
            });
    } 
);


function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding)
    return JSON.parse(file)
}