const { connection } = require('../model/connection')

const tradeGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM trade"
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


const tradePost = async (req, res) => {
    try {
        const data = [req.body]; 
        const query1 = "INSERT INTO trade SET ?"
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

const tradeDelete = async (req, res) => {
    try {
        const data = req.params.T_id
        const query1 = "DELETE FROM trade WHERE T_id=?"
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

const tradePut = async (req, res) => {
    try {
        const data = [
            req.body,
            req.params.T_id
          
        ]
        const query1 = "UPDATE trade SET ? WHERE T_id=?"
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

module.exports = { tradeGet, tradePost, tradeDelete, tradePut }