const sendgrid = require('@sendgrid/mail')
require('dotenv').config()
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = async (toEmail) => {
    const msg = {
        to: toEmail,
        from: process.env.FROM_EMAIL,
        subject: 'Bienvenido a nuestra plataforma',
        text: 'Bienvenido! Esperamos que disfrutes nuestros servicios.',
        html: '<h1>Bienvenido!</h1><p>Gracias por registrarte.</p>',
    }
    try {
       await sendgrid.send(msg)
       console.log('Correo enviado correctamente')
    } catch (error) {
        console.log('Error enviando el correo: ', error)
    }
}

module.exports = sendWelcomeEmail