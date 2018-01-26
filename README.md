# EAD-Status-Notification
As the name suggest, this project is to help track the status of the EAD (Work Permit status). 

I have use two packages

1. nodemailer
2. req-uscis-status

Both of the packages can be installed with 'npm'.  

The best way to run this code is by creating a cron job on any linux machine such as your personal machie (linux) or some cloud VM instance (eg AWS EC2) or a server owned by your University.

Before runnig the code please enter the appropriate values in config.json file.

    "username":"Email ID from which you want send emails"
    "password":"Password for email address mentioned above"
    "receiptNum":"USCIS Receipt number"
    "maillist":["Email IDs to which you want to notify (seperated by comma(,))"] 