const Pool = require("pg").Pool;

const pool2 = new Pool({
    user: "postgres",
    password: "ruv@3012",
    host: "localhost",
    port: 5432,
    database: "users"
});

module.exports = pool2;