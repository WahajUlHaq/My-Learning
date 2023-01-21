import express from "express";
import promptSync from "prompt-sync";

const app = express();
const prompt = promptSync();

app.get("/", (req, res) => {
  const name = prompt("What is your name?   ");

  res.send(name);
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
