module.exports = function() {
    var express = require("express");
    var app = express();

    app.get("/", function(req, res) {
        data = {
            "key": "value"
        };
        res.json(data);
    });

    app.get("/:id", function(req, res) {
        data = {
            "ID": req.params.id
        };
        res.json(data);
    });

    return app;
}();
