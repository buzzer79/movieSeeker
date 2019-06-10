const express = require("express");
const app = express();
const path = require("path");

const p = path.join(__dirname, "public", "main.html");

app.use(express.urlencoded({ extended: false }));
app.set("view enigne", "ejs");
app.set("views", "./src/views");

app.use(express.static("./src/public"));

app.get("/", (req, res) => {
	res.sendFile(p);
});

app.listen(8080);
