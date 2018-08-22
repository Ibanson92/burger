var orm = require("../config/orm");

var burgers = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insert: function(cb) {
        orm.insertOne("burgers", function(res) {
          cb(res);
        });
      },
      update: function(cb) {
        orm.update("burgers", function(res) {
          cb(res);
        });
      },
}
  
  
  
  



module.exports=burgers
