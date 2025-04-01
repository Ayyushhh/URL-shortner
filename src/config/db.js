import pkg from'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    connectionString : process.env.POSTGRES_URI
});

pool.on("connect", () => console.log("✅ Connected to PostgreSQL"));

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS urls (
        id SERIAL PRIMARY KEY,
        short_id VARCHAR(8) UNIQUE NOT NULL,
        long_url TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        expires_at TIMESTAMP
    );
`;

const initializeDB = async () => {
    try {
        await pool.query(createTableQuery);
        console.log("✅ Table 'urls' is ready!");
    } catch (err) {
        console.error("❌ Error creating table:", err);
    }
};

pool.on("error", (err) => console.error(`Postgres Connection Failed: ${err}`));

export {
    pool,
    initializeDB
}