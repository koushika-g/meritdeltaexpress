var express = require("express");
var app = express();


var studentRoutes= require("./student.routes");
var employeeRoutes= require("./employee.routes");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','pug');
app.set('views','./views');


app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");

})
app.use("/student",studentRoutes)
app.use("/employee",employeeRoutes)


app.listen(8099,function(){console.log("listening on 8099")})