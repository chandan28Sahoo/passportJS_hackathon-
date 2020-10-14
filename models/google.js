const database = require('./database')
const { Model } = require('objection');
Model.knex(database);

class google extends Model {
    static get tableName() {
        return 'google';
    }
}

module.exports = google;