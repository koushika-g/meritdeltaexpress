var express=require("express");
var router=express.Router();
var employees=[];

router.get("/regemployee",function(req,res){
    res.sendFile(__dirname+"/empreg.html");
})

router.get("/emplist",function(req,res){
    res.render("employee",{
        allemployees:employees
    })
})
router.post("/empregister",function(req,res){
    employees.push(req.body);
    res.send("employee registration successful!!")
})
module.exports=router;