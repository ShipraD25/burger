var connection = require("../config/connection");

var orm = {
    selectall: function(whatToSelect, tableInput) {
        var querystring = "SELECT ?? FROM ??";
        connection.query(querystring, [whatToSelect, tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

}