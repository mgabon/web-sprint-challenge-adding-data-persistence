// build your `Project` model here
const db = require('../../data/dbConfig');

function getProject(){
    return db('projects')
    .then(projects => {
        return projects.map(p => {
            return {...p, 'project_completed': p.project_completed === 1}
        })
    })
}

function getProjectById(id){
    return db('projects').where('project_id', id).first()
    .then(p => {
        return {...p, 'project_completed': p.project_completed === 1}
    })
}


function addProject(project){
  return db('projects')
  .insert(project)
  .then(([id]) => {
      return getProjectById(id)
  })  
}

module.exports = {
    getProject,
    addProject
}