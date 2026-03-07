//for config
const { MYSQL_DB_CONFIG } = require("../config/db.config");

//for mysql connection
const mysql = require("mysql2/promise");

//for Sequelize ORM
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();   // calling function initialize

async function initialize() {
    const { HOST, USER, PORT, PASSWORD, DB } = MYSQL_DB_CONFIG;

    const connection = await mysql.createConnection({
        host: HOST,
        user: USER,
        password: PASSWORD,
    });

    // when the async function is written, we need to await
    // with the $DB is the interpolation with the two string
    // + is the concatination to the two strings

    await connection.query(`Create database if not exists \`${DB}\`;`);

    //connect to db
    const sequelize = new Sequelize(DB, USER, PASSWORD, {
        dialect: "mysql",  // this is the handler for the which database is being used in the site
        host: HOST,
    });

    await sequelize.sync({ alter: true });
}
//Dont use alter to production