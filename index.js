import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

const logRequestStart = (req, res, next) => {
    const dataNeeded = (`${req.method} ${req.originalUrl}`);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'b3nmailer2021@gmail.com',
          pass: '"+f;#dv4d)D-#AH!QgE-fqK.!]Q>-?AGZxhvsC%mc~[6rqxWwS'
        }
    });
    
    const mailOptions = {
        from: 'b3nmailer2021@gmail.com',
        to: 'b3nhur77@gmail.com',
        subject: dataNeeded,
        text: `Here is the data that you need ${dataNeeded}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    next();
  };
  
  const PORT = process.env.PORT || 5000;
  app.use(logRequestStart);
  app.get('/', function(req, res, next) {
    res.send('<h1>Welcome to my world!</h1>');
});
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))