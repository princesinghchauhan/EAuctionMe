const { connection } = require('../model/connection')
const uuid = require('uuid').v4
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userGet = async (req, res) => {
    try {
        const query1 = "SELECT * FROM user"
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


// const userPost = async (req, res) => {
//     try {
//         const data = [req.body]; 
//         const query1 = "INSERT INTO user SET ?"
//         await connection.query(query1, data, (err, result) => {
//             if (err) {
//                 return res.send(err.sqlMessage)
//             }
//             {
//                 res.send(result)
//             }
//         })
//     }
//     catch (err) {
//         res.send(err.sqlMessage)

//     }
// }

const userPost = async (req, res) => {
    const { Full_Name, Email, gender, password, mobile, Address, status, Registration_date, last_update } = req.body
    const salt = await bcrypt.genSalt(8)
    const pass = await bcrypt.hash(password, salt)

    const data = { user_id: uuid(), Full_Name, Email, gender, password: pass, mobile, Address, status, Registration_date, last_update }
    const query1 = "INSERT INTO user SET ?"
    await connection.query(query1, data, (error, result) => {
        if (error) {
            return res.send(error.sqlMessage)
        } else {
            res.send(result)
        }
    })
}

const userLogin = async (req, res) => {
    const { Email, password } = req.body
    const query1 = " SELECT * FROM user WHERE  Email = ?"
    await connection.query(query1, Email, async (err, result) => {
        if (err) {
            return res.json({ error: err.sqlMessage })
        }
        const pass = result[0].password
        const id = result[0].Email
        const passCheck = await bcrypt.compare(password, pass)

        if (!passCheck) {
            return res.json({ password: "password not matched" })
        }
        const token = await jwt.sign({ id }, "prince")
        res.json({ response: 200, token })
    })
}

const userDelete = async (req, res) => {
    try {
        const data = req.params.user_id
        const query1 = "DELETE FROM user WHERE user_id=?"
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

const userPut = async (req, res) => {
    try {
        const data = [
            req.body,
            req.params.user_id

        ]
        const query1 = "UPDATE user SET ? WHERE user_id=?"
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

module.exports = { userGet, userPost, userDelete, userPut, userLogin }