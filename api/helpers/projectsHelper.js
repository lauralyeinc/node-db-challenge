const db = require("../../data/db-Config");


const find = () => {
    return db('projects'); 
};

const findById = project_id => {
    return db('projects')
        .where("id", project_id)
        .first();
};

const add = newProject => {
    return db('projects').insert(newProject);
};


module.exports = {
    find, 
    findById,
    add
};