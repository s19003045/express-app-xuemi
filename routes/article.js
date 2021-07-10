const express = require("express");
const router = express.Router();
const articles = require("../data/articles");

// 單篇文章
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.render("article", {
        articles: [articles[id]],
        backUrl: "/articles",
    });
    // res.render("articles", context);
});

// 文章列表
router.get("/", (req, res) => {
    res.render("articles", { articles: articles });
});

module.exports = router;
