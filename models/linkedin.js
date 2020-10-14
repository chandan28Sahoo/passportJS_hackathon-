const database = require('./database')
const { Model } = require('objection');
Model.knex(database);

class linkedin extends Model {
    static get tableName() {
        return 'linkedin';
    }
}

module.exports = linkedin;