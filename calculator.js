const express= require ("express");
const bodyParser= require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname +"/bmicalculator.html");
   
});

app.post("/bmicalculator", function(req,res){
    console.log(req.body);
    var h= req.body.height;
    var w=req.body.wieght;
    var bmi=w/(h^2);
    res.send(bmi);
    
});

app.listen(3000, function(){
    console.log("calculator server started at port 3000");
}); 