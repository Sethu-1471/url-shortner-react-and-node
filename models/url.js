const mongoose = require("mongoose");

const URLScema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {type: String, default: Date.now}
})

module.exports = mongoose.model('Url', URLScema)