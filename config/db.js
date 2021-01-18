const mongoose = require("mongoose");
const dbStore = require("config");
const db = dbStore.get("mongoURL");

const connectDB = async () => {
    try {
        const con = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("MONGO_DB Connected", con.connection.host);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB