const express = require("express")
const cors = require('cors');
const app  = express()
const rateLimit = require('express-rate-limit');

const dbFn = require('./database')
const dotenv = require("dotenv")
dotenv.config()

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

require('./cron-scripts/autobot-scripts')
app.use(cors());
// Apply rate limit to all routes
app.use(limiter);

app.get('/autobots', (req, res) => {
    try {
        dbFn.getAutobots().then((result) => {
            res.status(200).send(result)
        })
    } catch(error) {
        res.status(400).json({ error: error.message || "An unexpected error occurred." })
    }
})

app.get('/autobots/:id', (req, res) => {
    try {
        const id = req.params.id

        dbFn.getAutobot(id).then((result) => {
            res.status(200).send(result)
        })
        

    } catch(error) {
        res.status(404).json({ error: error.message || "An unexpected error occurred." })
    }
})

app.get('/posts', (req, res) => {
    try {
        dbFn.getPosts().then((result) => {
            res.status(200).send(result)
        })
    } catch(error) {
        res.status(400).json({ error: error.message || "An unexpected error occurred." })
    }
})

app.get('/posts/:id', (req, res) => {
    try {
        const id = req.params.post_id

        dbFn.getPost(id).then((result) => {
            res.status(200).send(result)
        })
    } catch(error) {
        res.status(400).json({ error: error.message || "An unexpected error occurred." })
    }
})

app.get('/posts/autobots/:autobot_id', (req, res) => {
    try {
        const id = req.params.autobot_id
        dbFn.getPostbyAutobot(id).then((result) => {
            res.status(200).send(result)
        })
        

    } catch(error) {
        res.status(400).json({ error: error.message || "An unexpected error occurred." })
    }
})

app.get('/comments', (req, res) => {
    try {
        dbFn.getComments().then((result) => {
            res.status(200).json(result)
        })
    } catch(error) {
        res.status(400).json({ error: error.message || "An unexpected error occurred." })
    }
})

app.get('/comments/:id', (req, res) => {
    try {
        const id = req.params.id
        dbFn.getComment(id).then((result) => {
            res.status(200).json(result)
        })
    } catch(error) {
        res.status(400).json({ error: error.message || "An unexpected error occurred." })
    }
})

app.get('/comments/posts/:post_id', async (req, res) => {
    try {
        const id = req.params.post_id
        dbFn.getCommentByPost(id).then((result) => {
            res.status(200).json(result)
        })
    } catch(error) {
        res.status(400).json({ error: error.message || "An unexpected error occurred." })
    }
})

app.listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
  });
