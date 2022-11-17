const joi = require('joi')

const schema = joi.object({

    Role_id: joi.number().integer().min(1).max(100).required(),
    Role_Name: joi.number().integer().min(1).max(100).required()
})

const roleValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}
module.exports = { roleValidate }