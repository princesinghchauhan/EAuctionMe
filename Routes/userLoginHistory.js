const express = require('express')
const userLoginHistory = express.Router()

const { userLoginHistoryGet, userLoginHistoryPost, userLoginHistoryDelete, userLoginHistoryPut } = require('../controller/userLoginHistory.api')
const {userLoginHistoryValidate} = require('../validation/userLoginHistory.joi')

userLoginHistory.get('/userloginhistoryget', userLoginHistoryGet)
userLoginHistory.post('/userloginhistorypost',userLoginHistoryValidate, userLoginHistoryPost)
userLoginHistory.delete('/userloginhistorydelete/:User_id', userLoginHistoryDelete)
userLoginHistory.put('/userloginhistoryupdate/:User_id',userLoginHistoryValidate, userLoginHistoryPut)

module.exports = {userLoginHistory}