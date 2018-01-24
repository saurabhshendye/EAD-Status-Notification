var rus = require('req-uscis-status')
var nodemailer = require('nodemailer')


var fs = require("fs"),
    json;

json = readJsonFileSync('config.json')


function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding)
    return JSON.parse(file)
}

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: json.username,
        pass: json.password
    }
});

rus.getStatus(json.receiptNum, 
  function(err, statusObject) { 
        transporter.sendMail({
            from: "Saurabh Shendye"+"<"+json.username+">",
            to: json.maillist,
            subject: "FINAL TEST: " + statusObject.statusShortText,
            text : "EAD status: \n" + statusObject.statusLongText
        },(err, success)=>{
            if (err){
                console.log(err);   
            }
        });
  } 
);

