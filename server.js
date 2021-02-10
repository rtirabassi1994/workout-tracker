var express = require("express");
// Import routes and give the server access to them.
var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes")
const mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(apiRoutes);
app.use(htmlRoutes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});