const express = require('express')

const roleAssign = express.Router()

const { roleAssignGet, roleAssignPost, roleAssignDelete, roleAssignPut } = require('../controller/roleAssign.api')
const {roleAssignValidate} = require('../validation/roleAssign.joi')

roleAssign.get('/roleassignget', roleAssignGet)
roleAssign.post('/roleassignpost', roleAssignValidate, roleAssignPost)
roleAssign.delete('/roleassigndelete/:user_id', roleAssignDelete)
roleAssign.put('/roleassignupdate/:user_id', roleAssignValidate, roleAssignPut)

module.exports = {roleAssign}