# EAD-Status-Notification
As the name suggest, this project is to help track the status of the EAD (Work Permit status). 

To work this out with AWS SES we need pakcages:

1. aws-sdk
2. req-uscis-status

Both of the packages can be installed with node package manager 'npm'.  

The best way to run this code is by creating a cron job on any linux machine such as your personal machie (linux) or some cloud VM instance (eg AWS EC2) or a server owned by your University.

Before runnig the code please enter the appropriate values in config.json file.

    "username":"Email ID from which you want send emails"
    "receiptNum":"USCIS Receipt number"
    "maillist":["Email IDs to which you want to notify (seperated by comma(,))"] 

Also, as we are using AWS we need aws-config.json file as well.

    { 
        "accessKeyId": "YOURAMAZONKEY", 
        "secretAccessKey": "YOURAMAZONSECRET", 
        "region": "us-west-2" 
    }