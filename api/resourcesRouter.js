const express = require('express');

const resourcesDB = require('./helpers/resourcesHelper');

const router = express.Router();

router.get('/', (req, res) => {
    resourcesDB.find()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            console.log(error, "error");
            res.status(500).json({message: "Failed to get all resources."});
        });
});

router.post('/', (req, res) => {
    resourcesDB.add(req.body)
        .then(newResource => {
            res.status(200).json(newResource);
        })
        .catch(error => {
            console.log(error, "error");
            res.status(500).json({message: 'Failed to add new Resource.'});
        });
});

module.exports = router; 
