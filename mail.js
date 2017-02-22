var conexion = require('./connection');
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maxxcam.mail@gmail.com',
        pass: 'yourpass'
    }
});


function Mailer() {
    this.sendMail = function(para){

        let mailOptions = {
            from: '"MaxxCam 👻" <maxxcam.mail@gmail.com>', // sender address
            to: para, // list of receivers
            subject: 'MaxxCam Orden de Compra ', // Subject line
            text: 'Hello world ?', // plain text body
            html: '<b>Hello world ?</b>' // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.send({estado: 'Error'});}
            console.log('Message %s sent: %s', info.messageId, info.response);
            return res.send({estado: 'Enviado'});

        });
    } 
}