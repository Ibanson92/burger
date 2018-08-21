var connection = require("./connection");
var mysql = require("mysql");


var orm = {

    selectAll: function(col, table, cb)
    {

        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, [col, table], function(err, result){
                if(err)throw err;

              console.log(result);  

              cb(err, result);

        });

    },
    insertOne: function(col, table, cb)
    {

        var queryString = "INSERT INTO burgers";
        connection.query(queryString, [col, table], function(err, result){
                if(err)throw err;

              console.log(result);  

              cb(err, result);

        });

    },
    updateOne: function(col, table, cb)
    {

        var queryString = "UPDATE burgers";
        connection.query(queryString, [col, table], function(err, result){
                if(err)throw err;

              console.log(result);  

              cb(err, result);

        });

    }
}

module.exports = orm;
