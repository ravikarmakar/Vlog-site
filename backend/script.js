const express = require("express");
require("dotenv").config();
// const cors = require("cors");
// const Vlogsite = require("./models/VlogsiteModels");
const mongoose = require("mongoose");
const vlogsiteRouter = require("./routes/Vlogsite");

//  express app
const app = express();

// middleware
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Allow only React app at localhost:3000
//   })
// );
app.use(express.json());

// connect to mongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// route handle

app.use("/api/vlogsite/vlogs", vlogsiteRouter);

app.listen(process.env.PORT, () => {
  console.log(`listen on port ${process.env.PORT}`);
});
