const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tmf2", // create this later in MySQL
  port: 3306, // Make sure it's the correct port
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to MySQL:", err);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

module.exports = connection;
