import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 1*60*1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: "Rate limit Exceeded. Try again later"
});

export {
    limiter
}