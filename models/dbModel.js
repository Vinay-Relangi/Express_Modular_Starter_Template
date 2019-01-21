const sql = require('mssql');
const config = {
    user: 'vinay',
    password: 'Test@123',
    server: '192.168.0.119',
    port: 3133,
    database: 'analytic_05122018',
    parseJSON: true
}
const pool = new sql.ConnectionPool(config);

pool.connect((err) => false);

const dbRequest = async (reqQuery) => {
    await pool;
    try {
        let result = await pool.request().query(reqQuery);
        return result.recordset;
    } catch (err) {

    }
}

exports.dbRequest = dbRequest;