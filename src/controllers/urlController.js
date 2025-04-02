import { shortenURL,getOriginalURL } from "../services/urlService.js";

async function shorten(req,res) {
    const { longURL } = req.body;
    if(!longURL)
        return res.status(400).json({
            error: "longURL required"
    });

    const shortURL = await shortenURL(longURL);
    res.json({shortURL});
}

async function redirect(req,res) {
    const { shortID } = req.params;
    const originalURL = await getOriginalURL(shortID);

    if (!originalURL) return res.status(404).json({ error: "URL not found" });

    res.redirect(originalURL);
}

export {
    shorten,
    redirect
}