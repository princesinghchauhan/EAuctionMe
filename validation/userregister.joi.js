const joi = require('joi')

const schema = joi.object({

    // user_id: joi.number().integer().min(1).max(100).required(),
    Full_Name: joi.string().min(1).max(100).required(),
    Email: joi.string().min(1).max(100).required(),
    gender: joi.string().min(1).max(100).required(),
    password: joi.number().integer().min(1).max(99999999999).required(),
    mobile: joi.number().integer().min(1).max(9999999999).required(),
    Address: joi.string().min(1).max(100).required(),
    status: joi.string().min(1).max(100).required(),
    Registration_date: joi.date().required(),
    last_update: joi.date().required()
})

const userRegistrationValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}
module.exports = { userRegistrationValidate }