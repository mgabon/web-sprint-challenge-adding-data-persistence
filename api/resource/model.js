// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResource(){
    return db('resources')
}

function getResourceById(id){
    return db('resources').where('resource_id', id).first()
}

function addResource(resource){
return db('resources')
.insert(resource)
.then(([id]) => {
    return getResourceById(id)
})
}

module.exports = {
    getResource,
    addResource
}