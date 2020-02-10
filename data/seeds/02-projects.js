
exports.seed = function(knex) {
  return knex('projects').insert([
    {id: 1, project_name: 'Open to Your Github Profile.', description: 'Look at what all you have made!', is_complete: 'true'},
    {id: 2, project_name: 'Record A Message', description: 'Record yourself, cheer yourself on!', is_complete: 'false'},
    {id: 3, project_name: 'Prepare for A Lecture', description: 'Get your resources together!', is_complete: 'false'},
    {id: 4, project_name: 'Call A Friend', description: 'Relax and have a chat!', is_complete: 'false'},
    {id: 5, project_name: "Deliever Flowers for St. Valentine's Day", description: '', is_complete: 'false'}
  // {id: , project_name: '', description: '', is_complete: ''}
  ]);
};

