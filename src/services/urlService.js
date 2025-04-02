import { generateNanoId } from "../utils/nanoid.js";
import { redisConnection } from "../config/redis.js";
import { saveURL,getURL } from "../models/urlModel.js";

async function shortenURL(longURL){
    const existingShortURL = await redisConnection.get(longURL);
    if(existingShortURL) 
        return existingShortURL;

    const shortID = generateNanoId();
    const shortURL = `http://localhost:3000/${shortID}`;

    await redisConnection.set(shortID,longURL,"EX", 604800);
    await redisConnection.set(longURL,shortID,"EX", 604800);
    await saveURL(shortID,longURL);

    return shortURL;
}

async function getOriginalURL(shortID){
    const longURL = await redisConnection.get(shortID);
    if(longURL)
        return longURL;

    return await getURL(shortID);
}

export {
    shortenURL,
    getOriginalURL
}
