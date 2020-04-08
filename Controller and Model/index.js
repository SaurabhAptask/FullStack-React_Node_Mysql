//use Mysql Module
const mysql = require('mysql');
//use experess Module
const express = require('express');
//use body-parser Module
const bodyparser = require('body-parser');
//use cors module to listen from other port
var cors = require('cors')

//intialize
var app = express();

//Configuring express server
app.use(bodyparser.json());


//MySQL details
var mysqlConnection = mysql.createConnection({
 	host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Locusnine'
});

//database connection
mysqlConnection.connect((err)=> {
	if(!err)
	console.log('Connection Established Successfully');
	else
	console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

app.use(cors())

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));


//Creating GET Router to fetch all the user details from the MySQL Database
app.get('/users' , (req, res) => {
mysqlConnection.query('SELECT * FROM Locusnine.User', (err, rows, fields) => {
	if (!err)
	res.send(rows);
	else
	console.log(err);
	})
});

//route for insert data
app.post('/add',(req, res) => {
  let data = {User_name: req.body.User_name, User_email: req.body.User_email};
  let sql = "INSERT INTO Locusnine.User SET ?";
  let query = mysqlConnection.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for update data
app.post('/update',(req, res) => {
  let sql = "UPDATE Locusnine.User SET User_name='"+req.body.User_name+"', User_email='"+req.body.product_price+"' WHERE User_id="+req.body.id;
  let query = mysqlConnection.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
 
//route for delete data
app.post('/delete',(req, res) => {
  let sql = "DELETE FROM Locusnine.User WHERE User_id="+req.body.User_id+"";
  let query = mysqlConnection.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});




