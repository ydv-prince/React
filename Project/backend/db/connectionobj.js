const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"sample",
    password:"1234567890",
    port:5432
});
module.exports = pool;