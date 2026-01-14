import express from "express";

import "dotenv/config";

import { pool } from "./config/db";


const app = express();

const port = process.env.PORT || 8001;

(async () => {
  try {
    const conn = await pool.getConnection();
    await conn.query("SELECT 1");
    conn.release();

    console.log(`MySQL Connected`);

    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  } catch (error) {
    console.error("Database connection failed");
    console.error(error);
    process.exit(1);
  }
})();
