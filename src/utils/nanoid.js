import { customAlphabet } from "nanoid";

const generateNanoId = () => {
    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);
    return nanoid();
}

export {
    generateNanoId
};