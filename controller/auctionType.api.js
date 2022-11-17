const { connection } = require('../model/connection')

const auctionTypeGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM auction_type"
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


const auctionTypePost = async (req, res) => {
    try {
        const data = [req.body]; 
        const query1 = "INSERT INTO auction_type SET ?"
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

const auctionTypeDelete = async (req, res) => {
    try {
        const data = req.params.Auction_id
        const query1 = "DELETE FROM auction_type WHERE Auction_id=?"
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

const auctionTypePut = async (req, res) => {
    try {
        const data = [
            req.body,
            req.params.Auction_id
          
        ]
        const query1 = "UPDATE auction_type SET ? WHERE Auction_id=?"
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

module.exports = { auctionTypeGet, auctionTypePost, auctionTypeDelete, auctionTypePut }