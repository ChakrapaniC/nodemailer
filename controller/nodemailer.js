const nodemailer = require("nodemailer");
require('dotenv').config();

const sendMail = async (req, res) => {
    try {
        console.log(process.env.ETHEREAL_USER)
        //connect with smtp
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: process.env.ETHEREAL_USER,  
                pass: process.env.ETHEREAL_PASS   
            }
        });

        //send mail
        const info = await transporter.sendMail({
            from: '"Chakrapani Chaturvedi" <chakrapani@gmail.com>',
            to: "chitranshsharma53@gmail.com", 
            subject: "Hello chitransh",
            text: "How you doing", 
            html: "<b>How you doing?</b>",
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);

    } catch (error) {
        console.error(error);
        res.send({ error });
    }
};

module.exports = { sendMail };
