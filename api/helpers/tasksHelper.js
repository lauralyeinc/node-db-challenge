const db = require('../../data/db-Config');

const find = () => {
    return db("tasks")
        .select("projects.project_name as project name")
        .select("projects.description as project description")
        .select("tasks.description as task description")
        .select("tasks.notes as task notes")
        .select("projects.id as ProjectID")
        .join("projects", "tasks.project_id", "=", "projects.id"); 
};

const add = newTask => {
    return db("tasks").insert(newTask);
};

module.exports = {
    find, 
    add
};