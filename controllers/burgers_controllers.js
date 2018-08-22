var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get('/', function(req, res) {
    burgers.selectAll({}).then(function(burger_data) {
        console.log(burger_data);
        res.render("index", {burger_data}); 
    });

});


router.post("/createpost", function(req,res){

    burgers.create({
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