require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middlewares
// (or you can use body-parser...);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello')
})
const PORT = 3000

// middlewares
app.use('/api/todos', require('./router/api/todos'))
    // Connect to database
mongoose.connect(
    process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    },

    () => console.log('Connected to DB')
)
const db = mongoose.connection

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))