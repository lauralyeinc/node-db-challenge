const express = require('express');

const ProjectsDB = require('./helpers/projectsHelper.js');

const router = express.Router();

router.get('/', (req, res) => {
    ProjectsDB.find()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        console.log('error', error); 
        res.status(500).json({message: 'Failed to get Projects'});
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params; 
    ProjectsDB.findById(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        console.log(error, "error");
        res.status(500).json({message: 'Failed to get project'});
    });
});

module.exports = router; 