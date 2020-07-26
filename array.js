var express = require('express')
var app = express()

//Defining the array
let accounts = [
    {id:1,name:'alex',deposit:5},
    {id:2,name:'sarah',deposit:5},
    {id:3,name:'jim',deposit:5}
]


//This end point will display the full array content
app.get('/accounts',function(req,res){
    res.send(accounts)
})

//This end point will display a particular element by given id
app.get('/accounts/:id',function(req,res){

    /*Trying to find the specific element in the array by parsing the  
      parameter value of id  using the method find */
    let account = accounts.find(x=>x.id == parseInt(req.params.id));
    if (!account){
        res.send('Array element you are looking is not found in the array')
    }else{
        res.send(account)
    }
})



var port =3000;
app.listen(port)
console.log('Server listening on : '+port)