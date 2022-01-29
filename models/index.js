const mongoose = require('mongoose');
const db = mongoose.connection;
const dbURL = process.env.MONGO_URL;

mongoose
    .connect(dbURL)
    .then(() =>
        console.log(`MongoDB successfully connected at ${db.host}:${db.port}!`)
    )
    .catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err})`));

    module.export = {
        homeCook: require("./homeCook"),
        comment: require("./comment"),
        recipe: require("./recipe"),
    }