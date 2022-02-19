// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTasks() {
    const tasks = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')

    const formattedTasks = tasks.map(t => {
        if (t.task_completed === 1) {
            t.task_completed = true
        } else {
            t.task_completed = false
        } 
        return t
    })
    return formattedTasks;
}

function getTaskById(id) {
    return db('tasks').where('task_id', id).first()
        .then(t => {
            return { ...t, 'task_completed': t.task_completed === 1 }
        })
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(([id]) => {
            return getTaskById(id)
        })
}

module.exports = {
    getTasks,
    getTaskById,
    addTask
}