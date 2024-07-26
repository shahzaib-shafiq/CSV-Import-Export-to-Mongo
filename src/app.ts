import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello rld");
});

app.get("/a", (req, res) => {
  res.send("post world");
});

app.listen(port, () => {
  console.log(`listening on port typescript server${3000}`);
});
