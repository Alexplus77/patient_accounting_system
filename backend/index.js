const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routers/routers");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
mongoose
  .connect(
    "mongodb+srv://alexsuf:A27021986@cluster0.3uuhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server has been started on port: ${PORT}`)
    );
  })
  .catch((e) => console.log(e));
