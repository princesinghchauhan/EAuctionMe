const express = require('express')
const bidding = express.Router()

const { biddingGet, biddingPost, biddingDelete, biddingPut } = require('../controller/bidding.api')
const {biddingValidate} = require('../validation/bidding.joi')

bidding.get('/biddingget', biddingGet)
bidding.post('/biddingpost', biddingValidate, biddingPost)
bidding.delete('/biddingdelete/:T_id', biddingDelete)
bidding.put('/biddingupdate/:T_id', biddingValidate, biddingPut)

module.exports = {bidding}