const express = require('express');

const TaskDB = require('./helpers/tasksHelper');

router.get('/', (req, res) => {
    TaskDB.find()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            console.log("error", error);
            res.status(500).json({message: 'Unable to get all the tasks'});
        });
});


router.post('/', (req, res)  => {
    TaskDB.add(req.body)
        .then(newTask => {
            res.status(200).json(newTask);
        })
        .catch(error => {
            console.log("error", error);
            res.status(500).json({message: 'Unable to add new task.'});
        });
});

module.exports = {
    get, 
    post 
};