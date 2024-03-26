const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Test API endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoute);

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then((res) => {
    console.log("Connected to database: ", res);
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed: ", err);
  });
