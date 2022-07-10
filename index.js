const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDB = require("./src/config");
const { default: mongoose } = require("mongoose");

const Movie = require("./src/routes/movie");
const logger = require("./src/logger/logger");
const login = require("./src/controller/auth");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

connectToDB();

mongoose.connection.on("connected", () => {
  logger.info("Connected to database successfully ");
  console.log("database is connected successfully");
});

mongoose.connection.on("disconnected", () => {
  logger.error(`Failed to connect to MongoDB`);
  console.log("database is disconnected successfully");
});

app.get("/", (req, res) => res.send("Welcome to Book App Api"));

app.post("/login", login);

app.use("/movie", Movie);

app.listen(port, () => {
  logger.info("listening on port " + port);
  console.log(`listening on port ${port}`);
});
