const express = require("express");
const router = express.Router();
const articles = require("../data/articles");

// 根路由
router.get("/", function (req, res) {
    res.render("home");
    // res.send("hello world");
});

router.get("/about", (req, res) => {
    res.render("about");
});

// 使用 article router
router.use("/articles", require("./article"));

// 使用 file router
router.use("/file", require("./file"));

// 使用 auth router
router.use("/auth", require("./auth"));

router.get("/*", (req, res) => {
    res.send("Not found");
});

module.exports = router;
