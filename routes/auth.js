const express = require("express");
const router = express.Router();

// login page
router.get("/login", function (req, res) {
    res.render("login");
});

module.exports = router;
