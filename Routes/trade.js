const express = require('express')
const trade = express.Router()

const { tradeGet, tradePost, tradeDelete, tradePut } = require('../controller/trade.api')
const {tradeValidate} = require('../validation/trade.joi')

trade.get('/tradeget', tradeGet)
trade.post('/tradepost', tradeValidate, tradePost)
trade.delete('/tradedelete/:T_id', tradeDelete)
trade.put('/tradeupdate/:T_id', tradeValidate, tradePut)

module.exports = {trade}