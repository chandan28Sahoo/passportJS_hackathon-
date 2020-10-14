const database = require('./database')
const { Model } = require('objection');
Model.knex(database);

class github extends Model {
    static get tableName() {
        return 'github';
    }
}

module.exports = github;