import Redis from "ioredis";
import dotenv from 'dotenv';

dotenv.config();

const redisConnection = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    maxRetriesPerRequest: null,
    enableReadyCheck: false
});

redisConnection.on("connect", () => {
    console.log(`Redis Connection is Successfully`);
});

redisConnection.on("error", (err) => {
    console.error(`Redis Connection error: ${err}`);
});

export {
    redisConnection
}
