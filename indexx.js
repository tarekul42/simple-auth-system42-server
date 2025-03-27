const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 5000;

// middlewere
app.use(express.json());
app.use(cors());

// basic route setup
app.get("/", (req, res) =>{
    res.json(res)
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})