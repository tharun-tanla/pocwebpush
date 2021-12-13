const express = require("express");
const webPush = require("web-push");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("frontend"));

const publicKey =
  "";
const privateKey = "";

webPush.setVapidDetails("mailto:test@gmail.com", publicKey, privateKey);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/subscribe", (req, res) => {
  const sub = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: "Push Test" });

  webPush.sendNotification(sub,payload);
});

app.listen(3000, (req, res) => {
  console.log("sucessfully connected");
});
