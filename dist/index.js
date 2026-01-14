"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./config/db");
const app = (0, express_1.default)();
const port = process.env.PORT || 8001;
(async () => {
    try {
        const conn = await db_1.pool.getConnection();
        await conn.query("SELECT 1");
        conn.release();
        console.log(`MySQL Connected`);
        app.listen(port, () => {
            console.log(`Server is running on port : ${port}`);
        });
    }
    catch (error) {
        console.error("Database connection failed");
        console.error(error);
        process.exit(1);
    }
})();
