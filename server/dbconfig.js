import mysql from 'mysql2';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current file
const fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);

// Initializes the .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Database connection settings
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.getConnection((error, conn) => {
    if (error) {
        console.log(`Error connecting to database: ${error}`);
        return;
    }
    console.log(`Connection success!`);
    conn.release(); // Release the connection back to the pool
});

export default connection;
