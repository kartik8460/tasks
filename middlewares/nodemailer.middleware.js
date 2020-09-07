const nodemailer = require('nodemailer');

module.exports = async (requeat, response, next) => {
    try {
        let testAccount = await nodemailer.createTestAccount();
    
        let transport = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            },
        });

        let info = await transport.sendMail({
            from: '"From XYZ" <kartik8460@gmail.com> ',
            to: 'umeshgupta700@gmail.com',
            subject: "Hello",
            text: "Link to Reset Your Password",
            html: `<b>Hello world?</b>`
        });
        console.log(info );
        
    } catch (error) {
        
    }
}

