const database = require('./database')
const { Model } = require('objection');
Model.knex(database);

class facebook extends Model {
    static get tableName() {
        return 'facebook';
    }
}

module.exports = facebook;