import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Senha123!",
  database: "clinicadb",
});

export default pool;
