const express = require('express')
const router = express.Router()
const validUrl = require("valid-url");
const shortId = require("shortid");
const config = require("config");

//model
const URL = require("../models/url")

//@route /api/url/shorten @desc create Short url
router.post("/shorten", async(req, res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get("baseURL");

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json("Invalid base Url")
    }

    //create short url
    const urlCode = shortId.generate()
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await URL.findOne({
                longUrl
            })
            if (url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + "/" + urlCode;
                url = new URL({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })

                await url.save();

                res.json(url);
            }
        } catch (err) {
            console.log(err.message);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(401).json("Invalid LongUrl");
    }
})


module.exports = router