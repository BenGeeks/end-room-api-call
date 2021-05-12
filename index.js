// importing Express JS as our backend server
// https://expressjs.com/
import express from 'express';

// importing Nodemailer for sending the email
// https://nodemailer.com/about/
import nodemailer from 'nodemailer';

// creating the Express Application
const app = express();

// setting up the port to be used
const PORT = process.env.PORT || 5000;

// this is the Express JS Routing
// https://expressjs.com/en/guide/routing.html
app.get('/', function (req, res, next) {

  // this retrieved the url parameters
  // check step #2 of https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters
  const meetingNo = req.query.meetingNo;

  // this is just for browser response displaying the meeting number
  // try this link https://end-room-api-call.herokuapp.com/?meetingNo=thisisjustanexample
  res.send(`<h2>The meeting number is: ${meetingNo}</h2>`);


  // the next three block is for sending the email
  // https://www.youtube.com/watch?v=Va9UKGs1bwI&t=586s
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
  // email blocks ends here

});

// this starts the server to run on the port specied above
// https://expressjs.com/en/starter/hello-world.html
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
