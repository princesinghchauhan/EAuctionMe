const express = require('express')
const auctionType = express.Router()

const { auctionTypeGet, auctionTypePost, auctionTypeDelete, auctionTypePut } = require('../controller/auctionType.api')
const {auctionTypeValidate} = require('../validation/auctionType.joi')

auctionType.get('/auctiontypeget', auctionTypeGet)
auctionType.post('/auctiontypepost', auctionTypeValidate, auctionTypePost)
auctionType.delete('/auctiontypedelete/:Auction_id', auctionTypeDelete)
auctionType.put('/auctiontypeupdate/:Auction_id', auctionTypeValidate, auctionTypePut)

module.exports = {auctionType}