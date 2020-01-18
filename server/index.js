const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const path = require('path');

const app = express();

const port = 3000;

// add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use('/api', router);

// serving up our static files
app.use(express.static(path.join(__dirname, '../client/dist')))


// spin up the server and listen to the port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
