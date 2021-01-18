const express = require('express')
const router = express.Router()

//model
const URL = require("../models/url")

router.get('/:code', async (req, res) => {
    try {
        const url = await URL.findOne({ urlCode: req.params.code });
        if (url) {
            return res.redirect(url.longUrl);
        }
    } catch (err) {
        return res.status(404).json("url not found");
    }
})


module.exports = router