const joi = require('joi')

const schema = joi.object({

    T_id: joi.number().integer().min(1).max(100).required(),
    Business_id: joi.number().integer().min(1).max(100).required(),
    Property_Details: joi.string().min(1).max(100).required(),
    Auction_id: joi.number().integer().min(1).max(100).required(),
    Property_price: joi.number().integer().min(1).max(9999999999).required(),
    base_Price: joi.number().integer().min(1).max(9999999999).required(),
    Trade_from: joi.number().integer().min(1).max(100).required(),
    trade_to: joi.number().integer().min(1).max(1000).required()
})

const tradeValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}
module.exports = { tradeValidate }