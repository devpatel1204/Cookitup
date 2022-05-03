import express from "express";
import dotenv from "dotenv";
import db from "./Database/Database.js";
import router from "./API/api.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

dotenv.config();

const username = 'devpatel';
const password = '@devpatel1111';

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);
const URL = `mongodb+srv://${username}:${password}@food.xaken.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

db(URL);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
