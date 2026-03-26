const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/data", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./data/emae.json"));
    res.json(data);
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
