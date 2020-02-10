
exports.seed = function(knex) {
  return knex('resources').insert([
    {id: 1, resource_name: "computer"},
    {id: 2, resource_name: "conference room"},
    {id: 3, resource_name: "microphone"},
    {id: 4, resource_name: "delivery van"},
    {id: 5, resource_name: "phone"},
  
    // {id: , resource_name: ""},
  ])
};
