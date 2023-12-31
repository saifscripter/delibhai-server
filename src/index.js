const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// route imports
const userRoutes = require('./routes/v1/user.route');

dotenv.config();
const app = express();

// Application level middleware
// app.use(viewCount);

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.DATABASE_ATLAS).then(() => {
    const port = process.env.PORT || 5000;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}...`);
    });
});

app.use('/api/v1/user', userRoutes);
