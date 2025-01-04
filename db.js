require('dotenv').config();
const mongoose = require('mongoose');
async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Cannot connect to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDB;