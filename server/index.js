import express from "express";
import { connection } from "./database/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
connection(USERNAME, PASSWORD);


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
