var express=require("express");
var router=express.Router();
var students=[];

router.get("/regstudent",function(req,res){
    res.sendFile(__dirname+"/studentreg.html");
})

router.get("/studentlist",function(req,res){
    res.render("students",{
        allstudents:students
    })
})
router.post("/studentreg",function(req,res){
    students.push(req.body);
    res.send("students registration successful!!")
})
module.exports = router;