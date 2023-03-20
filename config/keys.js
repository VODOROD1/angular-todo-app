// module.exports = {
//     mongoURI: 'mongodb://vodorodo51:6NMf9hXBRWveEYMJ@cluster0.ztysiqh.mongodb.net/test'
// }


const fs = require('fs');
const mysql = require('mysql2');

const config = {
    host     : 'rc1b-emfe6vy73lms4ogw.mdb.yandexcloud.net',
    port     : 3306,
    user     : 'user1',
    password : '13246857',
    database : 'db1',
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('/home/<домашняя директория>/.mysql/root.crt').toString(),
    },
}

const conn = mysql.createConnection(config)
conn.connect(err => {if (err) throw err})
conn.query('SELECT version()', (err, result, fields) => {
    if (err) throw err
    console.log(result[0])
    conn.end()
})
