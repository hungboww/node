const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("Hello")
    
})
app.get('/tutorial', function(req, res){
    res.send([1,2,3])
} )
app.get('/tutorial/:id',function(req, res){
    res.send(req.params.id)
})
const port = process.env.PORT || 3000
app.listen(port, function (){
    console.log("connected!")
})