const express = require('express');

const projectsRouter = require('./api/projectsRouter');
// const tasksRouter = require('./api/tasksRouter');
// const resourcesRouter = require('./api/resourcesRouter');

const server = express();
server.use(express.json());

server.use('/api/projects', projectsRouter);
// server.use('/api/resources', resourcesRouter);
// server.use('/api/projects/:id/tasks', tasksRouter)

server.get('/', (req, res) => {
    res.send('<h1>  👩‍💻  Node DB Challenge </h1>');
});


module.exports = server; 