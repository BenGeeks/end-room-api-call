import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res, next) {
  const meetingNo = req.query.meetingNo;
  res.send(`<h2>The meeting number is: ${meetingNo}</h2>`);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'b3nmailer2021@gmail.com',
      pass: '"+f;#dv4d)D-#AH!QgE-fqK.!]Q>-?AGZxhvsC%mc~[6rqxWwS',
    },
  });

  const mailOptions = {
    from: 'b3nmailer2021@gmail.com',
    to: 'b3nhur77@gmail.com, jan@flowapp.com, tharinda@flowapp.com, saroj@flowapp.com',
    subject: meetingNo,
    text: `The meeting number is ${meetingNo}.`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
