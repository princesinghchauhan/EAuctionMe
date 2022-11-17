const joi = require('joi')

const schema = joi.object({

    T_id: joi.number().integer().min(1).max(100).required(),
    user_id: joi.number().integer().min(1).max(100).required(),
    datetime: joi.number().integer().min(1).max(100).required(),
    Amount: joi.number().integer().min(1).max(100).required(),
    status: joi.date().required()
})

const biddingValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}
module.exports = { biddingValidate }