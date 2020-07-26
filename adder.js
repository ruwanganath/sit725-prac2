var express = require('express')
var app = express()

var adder = function(num1,num2){
    var result = num1+num2;
    return result;
}

app.get('/adder',function(req,res){

    var num1= parseInt(req.query.num1);
    var num2= parseInt(req.query.num2);
    var result= adder(num1,num2);
    res.send('The result is : '+result)
})

var port =3000;
app.listen(port)
console.log('Server listening on : '+port)