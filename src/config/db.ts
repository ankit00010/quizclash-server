import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";
import "dotenv/config";

const ca = fs.readFileSync(path.join(__dirname, "../../certs/ca.pem"));


export const pool = mysql.createPool({
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  ssl: {
    ca,
    rejectUnauthorized: true,
  },
  waitForConnections: true,
  connectionLimit: 10,
});
