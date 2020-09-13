const nodemailer = require('nodemailer');
const loadash = require('lodash').template;
const EmailTemplates = require('./../models/emailTemplates.model');
module.exports = async (request, response, next) => {
    try {
        const template = await EmailTemplates.findOne({type:'reset-password'}, {_id:0, template:1});
        const compiledTemplate = loadash(template.template)({url: request.resetPasswordData.url, userName: request.resetPasswordData.userName});
        console.log(compiledTemplate);
        let transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'srk8460@gmail.com',
                pass: 'zxasqw007'
            },
        });

        let info = await transport.sendMail({
            from: '"From XYZ" <srk8460@gmail.com> ',
            to: request.resetPasswordData.email,
            subject: "Hello",
            text: "Link to Reset Your Password",
            html: compiledTemplate
        });
        response.send({
            success: true,
            message: 'We have successfully send the reset password url to your email associated with your account',
            template: compiledTemplate
        })
        
    } catch (error) {
        response.send({success: false, error: error.message})
    }
}

