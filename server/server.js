
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const corsIfInDevelopment = require('./modules/cors-if-on-development');

// start up the mongo database
require('./modules/database');

// Route includes
const messageRouter = require('./routes/message-router');

// allows cross-origin requests from localhost:3000 when on development
app.use(corsIfInDevelopment);

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/api/message', messageRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
