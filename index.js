const fs = require('fs')
const express = require('express')
// create object and add port   
const app = express()
const port = 6500;


// app.use --> generic middleware
// app.<http method> --> route handler on a route

// define default route with express
// root route   
//localhost:6500/introtonodejs/part1/details


app.get('/landing',function(req,res){
    res.send('<h1>Welcome to express server</h1>')
});

// read file using express server

app.get('/getMovies',(req,res)=>{
    fs.readFile('data-db.json',(err,result)=>{
        if(err){
            throw err;
        }
        else{
            res.send(JSON.parse(result));
        }
    })
});


app.listen(port,function(err){
    console.log('server is running on port '+ port);
});