const express = require('express')
const businessName = express.Router()


const { businessNameGet, businessNamePost, businessNameDelete, businessNamePut } = require('../controller/businessName.api')

const {businessNameValidate} = require('../validation/businessName.joi')
businessName.get('/businessnameget', businessNameGet)
businessName.post('/businessnamepost', businessNameValidate, businessNamePost)
businessName.delete('/businessnamedelete/:Business_id', businessNameDelete)
businessName.put('/businessnameupdate/:Business_id', businessNameValidate, businessNamePut)

module.exports = {businessName}