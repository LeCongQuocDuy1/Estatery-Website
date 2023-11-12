const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const port = process.env.PORT || 1234;
const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.listen(port, () => {
    return console.log("Server is running on port " + port);
});
