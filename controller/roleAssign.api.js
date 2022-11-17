const { connection } = require('../model/connection')

const roleAssignGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM role_assign"
        await connection.query(query1, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            } {
                res.send(result)
            }
        })
    } catch (err) {
        res.send(err.sqlMessage)

    }
}


const roleAssignPost = async (req, res) => {
    try {
        const data = [req.body]; 
        const query1 = "INSERT INTO role_assign SET ?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            }
            {
                res.send(result)
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage)

    }
}

const roleAssignDelete = async (req, res) => {
    try {
        const data = req.params.user_id
        const query1 = "DELETE FROM role_assign WHERE user_id=?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            } {
                res.send(result)
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage)

    }
}

const roleAssignPut = async (req, res) => {
    try {
        const data = [
            req.body,
            req.params.user_id
          
        ]
        const query1 = "UPDATE role_assign SET ? WHERE user_id=?"
        await connection.query(query1, data, (err, result) => {
            if (err) {
                return res.send(err.sqlMessage)
            } {
                res.send(result)
            }
        })
    }
    catch (err) {
        res.send(err.sqlMessage)

    }
}

module.exports = { roleAssignGet, roleAssignPost, roleAssignDelete, roleAssignPut }