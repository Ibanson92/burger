var express = require("express");
var orm = require("./models/burger.js");

router.post("/createpost", function(req,res){

    db.create({
       burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(dbTodo){
        console.log(dbTodo);
        res.json(dbTodo);
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
})


module.exports = router;