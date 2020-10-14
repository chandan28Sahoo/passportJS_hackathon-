exports.up = async(knex) => {
    await knex.schema.createTable("google", function(t) {
        t.string('id').notNullable()
        t.string("displayName").notNullable();
        t.string("email").notNullable();
        t.string("picture").notNullable();
    });

    await knex.schema.createTable("facebook", function(t) {
        t.string('id').notNullable()
        t.string("displayName").notNullable();
    });

    await knex.schema.createTable("github", function(t) {
        t.string('id').notNullable()
        t.string("displayName").notNullable();
    });


    await knex.schema.createTable("linkedin", function(t) {
        t.string('id').notNullable()
        t.string("displayName").notNullable();
    });
    return true;

};


exports.down = async(knex) => {
    await knex.schema.dropTableIfExists("google");
    await knex.schema.dropTableIfExists("facebook");
    await knex.schema.dropTableIfExists("github");
    await knex.schema.dropTableIfExists("linkedin");

    return true;
};























// exports.up = async(knex) => {
//     await knex.schema.createTable("cars", function(t) {
//         t.increments()
//         t.string("carName").notNullable();
//     });

//     await knex.schema.createTable("owners", function(t) {
//         t.increments()
//         t.string("ownerName").notNullable();
//     });

//     await knex.schema.createTable("car_owners", function(t) {
//         t.increments()
//         t.integer("car_id").references("id").inTable("cars")
//         t.integer("owner_id").references("id").inTable("owners")
//     });
//     return true;
// };

// exports.down = async(knex) => {
//     await knex.schema.dropTableIfExists("cars");
//     await knex.schema.dropTableIfExists("owners");
//     await knex.schema.dropTableIfExists("car_owners");

//     return true;
// };