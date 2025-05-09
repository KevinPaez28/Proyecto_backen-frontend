import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "Kevin_adso2894667",
  password: "Aprendiz2025",
  database: "Apis_db"
});

export default connection;