//connection to db
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.log(err.message)
    }
})

//create tables
const sessionTable = `
    CREATE TABLE IF NOT EXISTS session(
        id INTEGER PRIMARY KEY,
        user_id INTEGER,
        expires DATETIME NOT NULL DEFAULT "NOW",
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`
db.run(sessionTable)

const usersTable = `
    CREATE TABLE IF NOT EXISTS users(
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "nickname" TEXT NOT NULL UNIQUE, 
        "age" INTEGER, 
        "gender" TEXT NOT NULL, 
        "first_name" TEXT NOT NULL,
        "last_name" TEXT NOT NULL,
        "email" TEXT NOT NULL UNIQUE,
        "password" TEXT NOT NULL,
        "created_at" DATETIME NOT NULL DEFAULT "NOW"
    );
`
db.run(usersTable)

const postsTable = `
    CREATE TABLE IF NOT EXISTS posts (
        "id" INTEGER PRIMARY KEY,
        "user_id" INTEGER MOT NULL,
        "title" TEXT NOT NULL,
        "content" TEXT NOT NULL,
        "comment" INTEGER,
        "created_at" DATETIME NOT NULL DEFAULT "NOW",
        FOREIGN KEY("user_id") REFERENCES "users"("id"),
	    FOREIGN KEY("comment") REFERENCES "comments"("id")
    );
`
db.run(postsTable)

const commentTable = `
    CREATE TABLE IF NOT EXISTS comments(
        id INTEGER PRIMARY KEY,
        user_id INTEGER,
        post_id INTEGER,
        content TEXT NOT NULL,
        created_at DATETIME NOT NULL DEFAULT "NOW",
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(post_id) REFERENCES posts(id)
    );
`
db.run(commentTable)

const chatTable = `
    CREATE TABLE IF NOT EXISTS chat(
        id INTEGER PRIMARY KEY,
        from_id INTEGER,
        to_id INTEGER,
        seen INTEGER DEFAULT 0,
        message TEXT NOT NULL,
        created_at DATETIME NOT NULL DEFAULT "NOW",
        FOREIGN KEY(from_id) REFERENCES users(id),
        FOREIGN KEY(to_id) REFERENCES users(id)
    );
`
db.run(chatTable)