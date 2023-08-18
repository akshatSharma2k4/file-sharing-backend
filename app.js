//hello
const express = require("express");
const dotnev = require("dotenv").config();
const app = express();
const DBconnection = require("./db/db");
const port = process.env.PORT || 4000;
const router = require("./routes/routes");

const corsOptions = {
  origin: `${process.env.BASE_URL}`, // frontend URI (ReactJS)
};
const cors = require("cors");

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

DBconnection();
app.listen(port, () => {
  console.log("running");
});
