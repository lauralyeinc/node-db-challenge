const db = require('../../data/db-Config.js');


const find = () => {
    return db('resources');
};

const add = newResource => {
    return db('resources').insert(newResource);
}; 


module.exports ={
    find, 
    add
};