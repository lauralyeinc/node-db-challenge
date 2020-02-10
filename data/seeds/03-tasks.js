
exports.seed = function(knex) {
  return knex('tasks').insert([
    {id: 1, description: 'Go to the Conference Room', notes: '', project_id: 1, is_complete: 'true'},
    {id: 2, description: 'Start your computer', notes: 'or wake up from sleep', project_id: 1, is_complete: 'true'},
    {id: 3, description: 'Go to your favorite search enginee and type in github.com', notes: '', project_id: 1, is_complete: 'true'},
    {id: 4, description: 'Sign in to your github', notes: 'If need be', project_id: 1, is_complete: 'true'},
    {id: 5, description: 'Click on your icon and use the nagivation to click on My profile', notes: 'And we will be done!', project_id: 1, is_complete: 'true'},
    {id: 6, description: 'Go to a Quiet location', notes: 'Like a conference room', project_id: 2, is_complete: 'false'},
    {id: 7, description: 'Think about what you want to record & write it down.', notes: "Don't think to hard, whatever comes to mind!", project_id: 2, is_complete: 'false'},
    {id: 8, description: 'Read it over a few times outload', notes: 'Decide if you want to be causual, meaningful, etc.', project_id: 2, is_complete: 'false'},
    
    // {id: , description: '', notes: '', project_id:  , is_complete: ''},
  ]);
};

