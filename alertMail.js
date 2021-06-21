require("dotenv").config();

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
});

module.exports = async function alertMail(referenceNumber, buyerEmail){
  const message = {
      from: 'arjun@gmail.com', 
      to: `${buyerEmail}`,         
      subject: 'Invoice Payment Alert', 
      html: `Hey! This is a gentle Reminder for you to kindly complete your invoice payment in the next 2 days. Invoice Reference Number ${referenceNumber}`
  };
  await transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
  });
}   

