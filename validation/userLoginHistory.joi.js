const joi = require('joi')

const schema = joi.object({

    User_id: joi.number().integer().min(1).max(100).required(),
    LoginDateTime: joi.date().required(),
    Logout_Time: joi.date().required()
})

const userLoginHistoryValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}
module.exports = { userLoginHistoryValidate }