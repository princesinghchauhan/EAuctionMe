const { connection } = require('../model/connection')

const roleGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM role"
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


const rolePost = async (req, res) => {
    try {
        const data = [req.body]; 
        const query1 = "INSERT INTO role SET ?"
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

const roleDelete = async (req, res) => {
    try {
        const data = req.params.Role_id
        const query1 = "DELETE FROM role WHERE Role_id=?"
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

const rolePut = async (req, res) => {
    try {
        const data = [
            req.body,
            req.params.Role_id
          
        ]
        const query1 = "UPDATE role SET ? WHERE Role_id=?"
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

module.exports = { roleGet, rolePost, roleDelete, rolePut }