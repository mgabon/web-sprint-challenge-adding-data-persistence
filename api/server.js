// build your server here and require it from index.js
const express = require('express')
const server = express()

const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

server.use(express.json())

server.use('/api/project', projectRouter)
server.use('/api/resource', resourceRouter)
server.use('/api/task', taskRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Lets write some middleware!</h2>`)
})

module.exports = server