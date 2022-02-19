// build your `/api/tasks` router here
const express = require("express")
const router = express.Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(task => {
            res.json(task)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.addTask(req.body)
        .then(t => {
            res.json(t)
        })
        .catch(next)
})

module.exports = router