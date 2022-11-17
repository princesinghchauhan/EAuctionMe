const { connection } = require('../model/connection')

const userLoginHistoryGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM user_login_history"
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


const userLoginHistoryPost = async (req, res) => {
    try {
        const data = [req.body]; 
        const query1 = "INSERT INTO user_login_history SET ?"
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

const userLoginHistoryDelete = async (req, res) => {
    try {
        const data = req.params.User_id
        const query1 = "DELETE FROM user_login_history WHERE User_id=?"
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

const userLoginHistoryPut = async (req, res) => {
    try {
        const data = [
            req.body,
            req.params.User_id
          
        ]
        const query1 = "UPDATE user_login_history SET ? WHERE User_id=?"
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

module.exports = { userLoginHistoryGet, userLoginHistoryPost, userLoginHistoryDelete, userLoginHistoryPut }