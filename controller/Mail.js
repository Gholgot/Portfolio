require('nodemailer');

module.exports = function(sender, message, subject) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jacomelli.pro@gmail.com',
          pass: 'Gholgot06091995'
        }
      });
      
      var mailOptions = {
        from: sender,
        to: 'jacomelli.pro@gmail.com',
        subject: subject,
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}