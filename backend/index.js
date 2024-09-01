const sequelize = require('./config/database');
const cors = require('cors');
const express = require('express');
const cookieParser = require("cookie-parser");

const patentsRoute = require('./routes/patents');
const authRoute = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser())

// Sync the database
sequelize.sync()
.then(() => console.log('Database synced successfully!'))
.catch(err => console.error('Error syncing database:', err));

// Routes
app.use('/api', patentsRoute);
app.use('/auth', authRoute);

// const auth = require("./middlewares/auth.js")
// Auth Middleware based on JWT which prevent access of route without logging in
// app.use('/api', auth, patentsRoute);


// Start the cron jobs
require('./notify/cronJobs');
console.log("Hello");

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});