const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgBlue.white
    );
  } catch (error) {
    console.log(`Mongodb database Error ${error} `.bgGreen.white);
  }
};

module.exports = connectDB;
