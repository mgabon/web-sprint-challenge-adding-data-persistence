// build your `/api/resources` router here
const express = require("express")
const router = express.Router()
const Resources = require('./model')

router.get('/', (req, res , next) => {
Resources.getResource()
.then(resource => {
    res.status(200).json(resource)
})
.catch(next)
})

router.post('/', (req, res, next) => {
Resources.addResource(req.body)
    .then(resource => {
        console.log(resource)
        res.json(resource)
    })
    .catch(next)  
})

module.exports = router