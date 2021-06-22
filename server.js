require('dotenv').config()
const express = require("express");
const app = express();
const connectDB = require("./config/db.js");

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Api is running');
})

//Routes
app.use("/api/v1", require("./routes/playersRoute"));


app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

