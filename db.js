const mongoose = require('mongoose');
async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://preetigusain:6auIKXSjwoBaq8It@cluster0.fuqyrys.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Cannot connect to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDB;