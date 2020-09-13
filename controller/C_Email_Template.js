const EmailTemplate = require('./../models/emailTemplates.model');

exports.insertTemplate = async (request, response, next) => {
    try {
        const document = {
            template: request.body.template,
            type: request.body.type
        }
        const insertion = await EmailTemplate.create(document);
        response.status(201).send({success: true, message: 'Successfully Inserted Template'});
    } catch (error) {
        response.status(400).send({success: false, error: error.message});
    }
}

exports.getTemplate = async (request, response, next) => {
    try {
        const type = request.params.type;
        const template = await EmailTemplate.findOne({type: type});
        console.log(template);
        response.status(201).send(template.template);
    } catch (error) {
        response.status(400).send({success: false, error: error.message});
    }
}