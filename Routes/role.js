const express = require('express')
const role = express.Router()


const { roleGet, rolePost, roleDelete, rolePut } = require('../controller/role.api')
const {roleValidate} = require('../validation/role.joi')


role.get('/roleget', roleGet)
role.post('/rolepost', roleValidate, rolePost)
role.delete('/roledelete/:Role_id', roleDelete)
role.put('/roleupdate/:Role_id', roleValidate, rolePut)

module.exports = {role}