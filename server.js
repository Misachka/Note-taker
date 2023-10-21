// Dependencies
const express = require('express');

// app use express
const app = express();

// creating environment variable port
const PORT = process.env.PORT || 3001;


// asks express to create a route for every file in the 'public' folder
app.use(express.static('public'));
// sets up express app to handle data parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes 
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);


//  starts the server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});
