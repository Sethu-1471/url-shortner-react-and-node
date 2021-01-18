const express = require("express");
const connectDB = require("./config/db")
const app = express();
const cors = require("cors");

connectDB()

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"))

const PORT = 4500

app.listen(PORT, () => console.log("Running on port " + PORT));