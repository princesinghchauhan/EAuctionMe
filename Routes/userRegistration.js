const express = require('express')
const userRegistration_Router = express.Router()

const { userGet, userPost, userDelete, userPut , userLogin} = require('../controller/userRegistration.api')

const {userRegistrationValidate} = require('../validation/userregister.joi')

userRegistration_Router.get('/userregistrationget', userGet)
userRegistration_Router.post('/userregistrationpost', userRegistrationValidate, userPost)
userRegistration_Router.post('/userlogin',  userLogin)
userRegistration_Router.delete('/userregistrationdelete/:user_id', userDelete)
userRegistration_Router.put('/userregistrationput/:user_id',userRegistrationValidate, userPut)

module.exports = {userRegistration_Router}