const mysql = require('mysql2');

const dotenv = require("dotenv")
dotenv.config()

const db = mysql.createPool({
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DATABASE
}).promise();

async function getAutobots() {
    const rows = await db.query('SELECT * FROM autobots')
    return rows
}

async function getAutobot(autobot_id) {
    const rows = await db.query('SELECT * FROM autobots WHERE id = ?', [autobot_id])
    return rows
}

async function getComments() {
    const rows = await db.query('SELECT * FROM comments')
    return rows
}

async function getComment(comment_id) {
    const rows = await db.query('SELECT * FROM comments WHERE id = ?', [comment_id])
    return rows
}

async function getCommentByPost(post_id) {
    const rows = await db.query('SELECT * FROM comments WHERE post_id = ?', [comment_id])
    return rows
}

async function getPosts() {
    const rows = await db.query('SELECT * FROM posts')
    return rows
}

async function getPost(post_id) {
    const rows = await db.query('SELECT * FROM posts WHERE id = ?', [post_id])
    return rows
}

async function getPostbyAutobot(autobot_id) {
    const rows = await db.query('SELECT * FROM posts WHERE autobot_id = ?', [autobot_id])
    return rows
}


module.exports = {
    getAutobot,
    getAutobots,
    getComment,
    getCommentByPost,
    getComments,
    getPost,
    getPostbyAutobot,
    getPosts
}