import express from 'express';
import { initializeDB } from './config/db.js';
import { limiter } from './middleware/rateLimiter.js';
import { router } from './routes/urlRoutes.js';

const app = express();
app.use(express.json());
app.use(limiter);

initializeDB();
app.use("/api",router);

const PORT = 3000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));