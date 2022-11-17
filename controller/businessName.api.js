const { connection } = require('../model/connection');

const businessNameGet = async (req, res) => {
    try {
        const query1 = ' SELECT * FROM business_name'
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
const businessNamePost = async (req, res) => {
    try {
        const data = [req.body]
        const query1 = "INSERT INTO business_name SET ?"
        await connection.query(query1, data, (err, result) => {
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
const businessNameDelete = async (req, res) => {
    try {
        const data = req.params.Business_id;
        const query1 = "DELETE FROM business_name WHERE Business_id=?"
        await connection.query(query1, data, (err, result) => {
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

const businessNamePut = async (req, res) => {
    try {
        const data = [
            req.body,
            req.params.Business_id
        ]
        const query1 = "UPDATE business_name SET ? WHERE Business_id=?"
        await connection.query(query1, data, (err, result) => {
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

module.exports = { businessNameGet, businessNamePost, businessNameDelete, businessNamePut }