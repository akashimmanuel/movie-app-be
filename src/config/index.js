const mongoose = require("mongoose");
const logger = require("../logger/logger");
require("dotenv").config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);
  } catch (error) {
    logger.error(`Failed to connect to MongoDB: ${error}`);
  }
};

module.exports = connectToDB;
