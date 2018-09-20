import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import registrationRoutes from "~/routes/registration";

const { PORT, DB_URL } = process.env;

const app = express();

app.use(bodyParser.json());

app.use("/v1/registration", registrationRoutes);

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true, useCreateIndex: true }
);

const db = mongoose.connection;

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

db.on("error", () => {
  console.error("Could not connect to database");
  process.exit(1);
});
