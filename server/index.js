require("dotenv").config();
const mongoose = require("mongoose");

// UNCAUGHT EXCEPTION:
process.on("uncaughtException", (err) => {


  process.exit(1);
});

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)



const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>

);

// UNHANDLED PROMISE REJECTION CATCHER (GLOBALLY):
process.on("unhandledRejection", (err) => {


  server.close(() => process.exit(1)); // Argument 0 for Success, and Argument 1 for Uncalled Exception
});
