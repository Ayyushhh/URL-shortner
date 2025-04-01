import express from 'express';
import { initializeDB } from './config/db.js';
import { limiter } from './middleware/rateLimiter.js';

const app = express();
app.use(express.json());
app.use(limiter);

initializeDB();

const PORT = 3000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));