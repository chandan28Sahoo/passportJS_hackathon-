module.exports = {
    development: {
        client: 'mysql',
        connection: "mysql://root:chandan19@localhost:3306/project",
        migrations: {
            directory: __dirname + "/knex/migrations",
        },

    },
    production: {
        client: "mysql",
        connection: "mysql://root:chandan19@localhost:3306/project",
    },
}