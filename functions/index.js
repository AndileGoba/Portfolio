const functions = require('firebase-functions');

const rp = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'gobaindzondzobila@gmail.com',
        pass: 'ndilisagoba@008'
    }
});

exports.sendMail = functions.database.ref('/web-portfolio-3b24a/{pushId}').onCreate((snap, context) => {
    const vals = snap.val()
    var name = vals.name;
    var email = vals.email;
    var massage = vals.message;

    var mailOptions = {
        from: 'gobaindzondzobila@gmail.com',
        to: 'gobaindzondzobila@gmail.com',
        subject: 'Firebase Message',
        html: `<h1>New Form Submitted:</h1><p>From:${name}, ${email}</p><p>Message:${message}</p>`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);

        } else {
            console.log('Email sent:' + info.response);
        }
    });

    return null;
});