const joi = require('joi')

const schema = joi.object({

    Auction_id: joi.number().integer().min(1).max(100).required(),
    Auction_type: joi.number().integer().min(1).max(100).required(),
    added_on: joi.number().integer().min(1).max(100).required()
})

const auctionTypeValidate = async (req, res, next) => {
    const value = await schema.validate(req.body)

    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}
module.exports = { auctionTypeValidate }