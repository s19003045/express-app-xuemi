const express = require("express");
const router = express.Router();

// login page
router.get("/login", function (req, res) {
    // // originalUrl = baseUrl + url
    // console.log("1. baseUrl", req.baseUrl);
    // console.log("2. url", req.url);
    // console.log("3. originalUrl", req.originalUrl);
    // console.log("4. hostname", req.hostname);
    res.render("login");
});

module.exports = router;
