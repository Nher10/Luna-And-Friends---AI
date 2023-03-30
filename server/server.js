const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const errorHandler = require("./middlewares/errorMiddleware");
//routes path
const authRoutes = require("./routes/authRoutes");

//rest object
const app = express();

//mongo connection
connectDB();

//middleswares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", require("./routes/openaiRoutes"));

//listen
app.listen(8080, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white
  );
});
