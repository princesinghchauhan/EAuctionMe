const { connection } = require('../model/connection');

const biddingGet = async (req, res) => {
    try {
        const query1 = ' SELECT * FROM bidding'
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
const biddingPost = async (req, res) => {
    try {
        const data = [req.body]
        const query1 = "INSERT INTO bidding SET ?"
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
const biddingDelete = async (req, res) => {
    try {
        const data = req.params.T_id;
        const query1 = "DELETE FROM bidding WHERE T_id=?"
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

const biddingPut = async (req, res) => {
    try {
        const data = [
            req.body,
            req.params.T_id
        ]
        const query1 = "UPDATE bidding SET ? WHERE T_id=?"
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

module.exports = { biddingGet, biddingPost, biddingDelete, biddingPut }