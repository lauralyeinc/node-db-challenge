// Update with your config settings.

module.exports = {

  development: {
    useNullAsDefault: true, 
    client: 'sqlite3',
    connection: {
      filename: './data/agenda.db3'
    }
  },
  migrations: {
    directory: './data/migrations'
  }
};
