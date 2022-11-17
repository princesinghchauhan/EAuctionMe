const joi = require('joi')

const schema = joi.object({

    user_id: joi.number().integer().min(1).max(100).required(),
    Business_id: joi.number().integer().min(1).max(100).required(),
    Business_Name: joi.string().min(1).max(100).required(),
    Contact_no: joi.number().integer().min(1).max(9999999999).required(),
    Business_register_Date: joi.date().required(),
    status: joi.string().required(),
    Turnover: joi.number().integer().min(1).max(9999999999).required(),
    Last_update: joi.date().required(),
    URL: joi.string().required(),
    Email: joi.string().min(1).max(1000).required(),
    GST: joi.string().required(),
    PAN: joi.string().min(10).max(10).required(),
    Address: joi.string().min(1).max(1000).required(),
    state: joi.string().min(1).max(1000).required(),
    city: joi.string().min(1).max(1000).required(),
})

const businessNameValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}
module.exports = { businessNameValidate }