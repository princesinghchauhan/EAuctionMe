const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'e_auction'

})

connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("--Database Connected--😎")
    }
}
)
module.exports = { connection }