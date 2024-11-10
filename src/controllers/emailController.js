const sendWelcomeEmail = require('../services/sendEmailService.js')

const emailController = {

    sendEmail: async (req, res) => {
        try {
            let toEmail = req.body
            await sendWelcomeEmail(toEmail)
            res.status(200).json({message: 'Correo enviado'})
        } catch (error) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = emailController