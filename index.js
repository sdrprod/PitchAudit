const http = require("node:http");
const mysql = require("mysql2/promise");

const port = Number(process.env.PORT) || 3000;

async function checkDatabase() {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || "127.0.0.1",
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectTimeout: 10000,
    });

    await connection.query("SELECT 1 AS ok");

    console.log("DATABASE CHECK: SUCCESS");
  } catch (error) {
    console.error(
      "DATABASE CHECK: FAILED",
      error.code || "UNKNOWN_ERROR"
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

checkDatabase();

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    response.end(
      "<h1>PitchAudit</h1><p>Application running.</p>"
    );
  })
  .listen(port, "0.0.0.0");