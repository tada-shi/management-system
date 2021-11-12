const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5432,
    database: "hostel"
});

module.exports = pool;


// psql --host=ec2-50-17-171-127.compute-1.amazonaws.com  --port=5432  --username=enjtgsgqhcdlyo  --password --dbname=d9f4b5i8reiigr
