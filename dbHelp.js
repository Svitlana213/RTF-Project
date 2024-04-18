//connection to db
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err.message)
    }
})

// insert data into table
// insertSession = `INSERT INTO session(id, user_id, expires) VALUES(?,?,?)`
// db.run(insertSession, [1,1,1], (err) => {
//     if (err) {
//         return console.log(err.message)
//     }
// })

insertUser = `INSERT INTO users(nickname, age, gender, first_name, last_name, email, password, created_at) VALUES(?,?,?,?,?,?,?,?)`
db.run(insertUser, [], (err) => {
    if (err) {
        return console.log(err.message)
    }
})

// insertPost = `INSERT INTO posts(user_id, title, content, comment, created_at) VALUES (?,?,?,?,?)`
// db.run(insertPost, [], (err) => {
//     if (err) {
//         return console.log(err.message)
//     }
// })

// insertComment = `INSERT INTO comments(post_id, user_id, content, created_at) VALUES (?,?,?,?)`
// db.run(insertComment, [], (err) => {
//     if (err) {
//         return console.log(err.message)
//     }
// })

// insertChat = `INSERT INTO chat(from_id, to_id, seen, message, created_at) VALUES (?,?,?,?,?)`
// db.run(insertChat, [], (err) => {
//     if (err) {
//         return console.log(err.message)
//     }
// })