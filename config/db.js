const { createPool } = require('mysql');
const pool = createPool ({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'mydb'
});

pool.getConnection((err) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("DB connected");
    }
});

const executeQuery = (query, queryParams) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, queryParams, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(data);
            }) 
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = { executeQuery };
