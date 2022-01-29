const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose 
    .connect(process.env.DATABASE_URL)
    .then(() => 
        console.log(`MongoDB successfully connected at ${db.host} : ${db.port}`)
        )
    .catch((err) => 
        console.log(`MongoDB connection FAILED: (Error: ${err})`));

module.exports = {
    Recipe: require('./Recipe')
};