// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const router = require("express").Router();


  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });


module.exports = router;