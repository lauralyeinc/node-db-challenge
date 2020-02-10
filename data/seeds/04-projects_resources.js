
exports.seed = function(knex) {
  return knex('projects_resources').insert([
    {id:1 , project_id: 1, resource_id: 2},
    {id: 2, project_id: 1, resource_id: 1},
    {id: 3, project_id: 2, resource_id: 2},
    {id: 4, project_id: 2, resource_id: 3},
    // {id: , project_id: , resource_id: },
  ]);
}

