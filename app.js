const express = require("express");
const app = express();
const PORT = process.env.PORT || 5353;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.listen(5353, () => {
  console.log("El servidor esta corriendo en el puerto 5353");
});
