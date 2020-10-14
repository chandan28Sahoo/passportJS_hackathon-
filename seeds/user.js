exports.seed = function(knex) {
    return knex('users').insert([{
            id: 1,
            name: 'chandan',
            email: 'chandan19@gmail.com',
            password: 'chandan123'
        },
        {
            id: 2,
            name: 'Bhaskar',
            email: 'Bhaskar19@gmail.com',
            password: 'Bhaskar125'
        }
    ]);
};