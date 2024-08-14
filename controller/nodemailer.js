const nodemailer = require("nodemailer");
require('dotenv').config();

const sendMail = async (req, res) => {
    try {

        //connect with smtp
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: {
                user: process.env.ETHEREAL_USER,  
                pass: process.env.ETHEREAL_PASS   
            }
        });
        
        const mailOptions = {
            from: "dukesharma71@gmail.com",
            to: "chitranshsharma53@gmail.com",
            subject: "Hello from Nodemailer",
            text: "This is a test email sent using Nodemailer.",
          };
        //send mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email: ", error);
            } else {
              console.log("Email sent: ", info.response);
            }
          });
          
    } catch (error) {
        console.error(error);
    }
};

module.exports = { sendMail };
