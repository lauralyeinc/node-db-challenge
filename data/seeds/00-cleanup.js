const knexCleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return knexCleaner.clean(knex, {
    ignoreTables: ["knex_migrations", "knex_migreations_locks"]
  });
};
