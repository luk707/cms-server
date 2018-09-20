import express from "express";

const { PORT } = process.env;

const app = express();

app.get("/", (_, res) => {
  res.json({ message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
