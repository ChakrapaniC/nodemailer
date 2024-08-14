const express = require("express");
const { sendMail } = require("./controller/nodemailer");
const app = express();

app.get('/', (req,res)=> {
    res.send("this is the homepage");
})

app.get('/sendmail', (req, res)=> {
    sendMail(req , res)
})

const port = 5000;
app.listen(port , ()=> {
    console.log("server is runnig on port 5000")
})