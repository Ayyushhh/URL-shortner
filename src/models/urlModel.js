import { pool } from "../config/db.js";

async function saveURL(shortId,longURL){
    await pool.query("INSERT INTO urls (short_id, long_url) VALUES ($1, $2)",[shortId,longURL]);
}

async function getURL(shortID) {
    const result = await pool.query("SELECT long_url from urls where short_id = $1", [shortID]);
    return result.rows.length ? result.rows[0].long_url : null;
}

export {
    saveURL,
    getURL
}