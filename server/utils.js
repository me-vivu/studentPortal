const nodemailer = require('nodemailer');
require('dotenv').config();



const verifyMail = async(user, email, otp)=>{
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.AUTH_MAIL,
              pass: process.env.AUTH_PASS
            }
          });
          
          var mailOptions = {
            from: process.env.AUTH_MAIL,
            to: email,
            subject: 'Email verification mail : OTP ' + otp,
            text: 'Dear ' + user + "\n" + "This mail is sent for the email verification on our website. Please enter the otp " + otp
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    } catch (error) {
        
    }
}

module.exports = verifyMail;