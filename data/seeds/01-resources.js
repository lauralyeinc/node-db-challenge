
exports.seed = function(knex) {
  return knex('resources').insert([
    {id: 1, resource_name: "computer", description: ""},
    {id: 2, resource_name: "conference room", description: ""},
    {id: 3, resource_name: "microphone", description: ""},
    {id: 4, resource_name: "delivery van", description: ""},
    {id: 5, resource_name: "phone", description: ""},
  
    // {id: , resource_name: "" description: ""},
  ])
};
