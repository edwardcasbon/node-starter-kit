var path = require("path");
var compression = require("compression");
var express = require("express");

var app = express();

// Set the port to run on.
app.set("port", (process.env.PORT || 3000));

// GZIP compression.
app.use(compression());

// Static files (public directory)
app.use("/", express.static(path.join(__dirname, "public")));

// Set any global headers.
app.use(function(req, res, next) {

    // res.setHeader("Access-Control-Allow-Origin", "*");

    next();
});

// Seperate routes out.
app.use("/api", require("./routes/api"));

app.listen(app.get("port"), function() {
    console.log("Server started: http://localhost:" + app.get("port") + "/");
})
