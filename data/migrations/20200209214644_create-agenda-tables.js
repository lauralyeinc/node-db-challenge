
exports.up = function(knex) {
    return (knex.schema 
        .createTable("projects", tbl => {
            tbl.increments();
            tbl.string("project_name", 128).notNullable();
            tbl.string("description", 128);
            tbl.boolean("is_complete");
        }))
        .createTable("tasks", tbl => {
            tbl.increments();
            tbl.string("description", 128).notNullable();
            tbl.string("notes", 128);
            tbl
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
            tbl.boolean("is_complete");
        })
        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string("name", 128).notNullable().unique();
            tbl.string("description", 128); 
        })
        .createTable("projects_resources", tbl => {
            tbl.increments();
            tbl
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("projects.id");
            tbl
                .integer("resource_id")
                .unsigned() 
                .notNullable()
                .references("resources.id");
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("projects_resources")
        .dropTableIfExists("resources")
        .dropTableIfExists("task")
        .dropTableIfExists("projects"); 
};
