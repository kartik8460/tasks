const nodemailer = require('nodemailer');
const { request } = require('express');

module.exports = async (request, response, next) => {
    try {
        let testAccount = await nodemailer.createTestAccount();
        console.log(request.resetPasswordData, '\nURL IS ABOVE');
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
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            </head>
            <body>
                <div class="card">
                    <h5 class="card-header">Tasks</h5>
                    <div class="card-body">
                      <h5 class="card-title">Reset Password</h5>
                      <p class="card-text">Click on the button below to reset your password</p>
                      <a href="${request.resetPasswordData.url}" class="btn btn-primary">Click Here to reset Password</a>
                    </div>
                  </div>
            </body>
            </html>`
        });
        response.send({success: true, message: 'We have successfully send the reset password url to your email associated with your account'})
        
    } catch (error) {
        response.send({success: false, error: error.message})
    }
}

