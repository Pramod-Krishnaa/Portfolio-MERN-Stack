const express = require('express');
const app = express();
require("dotenv").config();
const dbconfig = require("./config/dbConfig");
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})