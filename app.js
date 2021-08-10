const express = require("express");
const app = express();
const path = require("path");
const port = 3040;

app.use(express.static("public"));

app.get(("/home"), (req,res) => res.sendFile(path.join(__dirname, "views", "home.html")));

app.listen(port, () => console.log("Servidor funcionando en el puerto " + port));