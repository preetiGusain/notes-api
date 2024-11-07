const express = require('express');
const connectDB = require('./db');

const app = express();

connectDB();

app.use(express.json());
app.use('/api/notes', require('./routes/notes'));

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));