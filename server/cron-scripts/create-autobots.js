const mysql = require('mysql2/promise');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const AUTOBOT_COUNT = 500;
const POSTS_PER_AUTOBOT = 10;
const COMMENTS_PER_POST = 10;

async function createAutobots() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.MY_SQL_HOST || '127.0.0.1',
      user: process.env.MY_SQL_USER || 'root',
      password: process.env.MY_SQL_PASSWORD || 'ra1a11acK!@',
      database: process.env.MY_SQL_DATABASE || 'smartinsightdb1'
    });
    console.log('Connected to MySQL');

    await connection.beginTransaction();

    for (let i = 0; i < AUTOBOT_COUNT; i++) {
      const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${(i % 10) + 1}`);
      const uniqueName = `${user.name}-${uuidv4()}`;
      const [autobotResult] = await connection.execute(
        'INSERT INTO autobots (name, email) VALUES (?, ?)',
        [uniqueName, user.email]
      );
      const autobotId = autobotResult.insertId;
      console.log(`Inserted autobot with ID: ${autobotId}`);

      const postPromises = [];
      for (let j = 0; j < POSTS_PER_AUTOBOT; j++) {
        postPromises.push(createPost(connection, autobotId, j));
      }
      await Promise.all(postPromises);
    }

    await connection.commit();
    console.log('All operations completed successfully');
  } catch (error) {
    if (connection) await connection.rollback();
    console.error('Error:', error);
  } finally {
    if (connection) await connection.end();
  }
}

async function createPost(connection, autobotId, index) {
  const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${(index % 10) + 1}`);
  const uniqueTitle = `${post.title} - ${uuidv4()}`;
  const [postResult] = await connection.execute(
    'INSERT INTO posts (autobot_id, title, body) VALUES (?, ?, ?)',
    [autobotId, uniqueTitle, post.body]
  );
  const postId = postResult.insertId;
  console.log(`Inserted post with ID: ${postId} for autobot ${autobotId}`);

  const commentPromises = [];
  for (let k = 0; k < COMMENTS_PER_POST; k++) {
    commentPromises.push(createComment(connection, postId, k));
  }
  await Promise.all(commentPromises);
}

async function createComment(connection, postId, index) {
  const { data: comment } = await axios.get(`https://jsonplaceholder.typicode.com/comments/${(index % 10) + 1}`);
  await connection.execute(
    'INSERT INTO comments (post_id, body, name, email) VALUES (?, ?, ?, ?)',
    [postId, comment.body, comment.name, comment.email]
  );
  console.log(`Inserted comment for post ${postId}`);
}

module.exports = {
  createAutobots
};

if (require.main === module) {
  createAutobots().catch(console.error);
}