require("dotenv").config()
const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("Awais Rehman Twitter")
})

app.get("/login", (req, res) => {
    res.send("<h1>Hello Awais</h1>")
})
app.get("/signup", (req, res) => {
    res.send("<h1>Register yourself first</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
