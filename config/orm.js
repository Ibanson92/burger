var connection = require("./connection");
var mysql = require("mysql");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(col, table, cb) {
    var queryString = "UPDATE burgers";
    connection.query(queryString, [col, table], function(err, result) {
      if (err) throw err;

      console.log(result);

      cb(err, result);
    });
  }
};

module.exports = orm;
