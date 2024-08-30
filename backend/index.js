const sequelize = require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sync the database
sequelize.sync()
    .then(() => console.log('Database synced successfully!'))
    .catch(err => console.error('Error syncing database:', err));

// Routes
const patentsRoute = require('./routes/patents');
app.use('/api', patentsRoute);

// Start the cron jobs
require('./notify/cronJobs');
console.log("Hello");

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});