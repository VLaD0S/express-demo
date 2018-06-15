const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql')



// controller imports
const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

// connecting to database
const con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"example",
  database:"express"

});


con.connect( function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE TABLE person (name VARCHAR(255))", function(err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});




// using css
app.use('/assets', express.static(__dirname + '/public'));

// setting view engine
app.set('view engine', 'ejs');



// views

apiController(app);
htmlController(app);
// listening on port

app.listen(port, () => {
  console.log('Listening on port '+ port +'...');
});
