const mongoose = require("mongoose");

const URI = process.env.MONGODB_URL || "mongodb://localhost:27017/fut21"

const connectDB = async() => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
        .then(() => console.log('MongoDB database connection established successfully'))
        .catch(err => console.log(err))

}

module.exports = connectDB;