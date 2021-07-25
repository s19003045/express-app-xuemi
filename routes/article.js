const express = require("express");
const router = express.Router();
// const articles = require("../data/articles");
const path = require("path");
const fs = require("fs");

// articles.json file path
const articleFilePath = path.join(__dirname, "../data/articles/articles.json");

// 文章列表
router.get("/", (req, res) => {
    fs.readFile(articleFilePath, (err, data) => {
        if (err) console.log(err);

        const articles = JSON.parse(data.toString());

        // 使用樣板
        res.render("articles", {
            articles: articles,
            js: ["article.js"]
        });
    });
    // res.render("articles", {
    //     articles: articles,
    //     js: ["article.js"]
    // });
});

// 進入新增文章頁面, 此路由必須在 router.get("/:id") 之前
router.get("/new", (req, res) => {
    res.render("articleEdit", {
        article: {
            title: "",
            subTitle: "",
            content: ""
        },
        method: "post",
        url: "/articles",
        backUrl: "/articles",
        js: ["article.js"]
    });
});

// 取得單篇文章
router.get("/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile(articleFilePath, (err, data) => {
        if (err) console.log(err);

        const articles = JSON.parse(data.toString());

        // 使用樣板
        res.render("article", {
            articles: [articles[id]],
            backUrl: "/articles",
            js: ["article.js"]
        });
    });
    // res.render("article", {
    //     articles: [articles[id]],
    //     backUrl: "/articles",
    //     js: ["article.js"]
    // });
});

// 進入編輯文章頁面
router.get("/:id/edit", (req, res) => {
    const id = req.params.id;

    fs.readFile(articleFilePath, (err, data) => {
        if (err) console.log(err);

        const articles = JSON.parse(data.toString());

        // 使用視圖模板
        res.render("articleEdit", {
            id: id,
            article: articles[id],
            method: "put",
            url: `/articles/${id}`,
            backUrl: "/articles",
            js: ["article.js"]
        });
    });
});

// 新增文章
router.post("/", (req, res) => {
    const { title, subTitle, content } = req.body;

    fs.readFile(articleFilePath, (err, data) => {
        if (err) console.log(err);

        const articles = JSON.parse(data.toString());

        articles.push({
            id: articles.length,
            title: title || "",
            subTitle: subTitle || "",
            date: new Date().toString(),
            content: content || "",
            url: `/articles/${articles.length}`,
            publish: true
        });

        const newData = JSON.stringify(articles, null, 4);
        fs.writeFile(articleFilePath, newData, (err) => {
            if (err) console.log(err);

            // 回傳 json 訊息
            res.send({
                statusText: "ok",
                message: "success post article",
                redirect: `/articles/${articles.length - 1}`
            });
        });
    });
});

// 修改文章
router.put("/:id", (req, res) => {
    const id = req.params.id;

    const { title, subTitle, content } = req.body;

    fs.readFile(articleFilePath, (err, data) => {
        if (err) console.log(err);

        const articles = JSON.parse(data.toString());

        articles[id] = {
            ...articles[id],
            title: title || "",
            subTitle: subTitle || "",
            updatedDate: new Date().toString(), // 修改日期
            content: content || ""
        };

        const newData = JSON.stringify(articles, null, 4);

        fs.writeFile(articleFilePath, newData, (err) => {
            if (err) console.log(err);

            // 回傳 json 訊息
            res.send({
                statusText: "ok",
                message: "success put article",
                redirect: `/articles/${id}`
            });
        });
    });
});

// 刪除文章
router.delete("/:id", (req, res) => {
    const index = req.params.id;

    if (index > -1) {
        fs.readFile(articleFilePath, (err, data) => {
            if (err) console.log(err);

            const articles = JSON.parse(data.toString());

            articles[index] = {
                ...articles[index],
                publish: false,
                delete: true,
                deleteDate: new Date().toString()
            };

            const newData = JSON.stringify(articles, null, 4);

            fs.writeFile(articleFilePath, newData, (err) => {
                if (err) console.log(err);

                // 回傳 json 訊息
                return res.send({
                    statusText: "ok",
                    message: "success delete article",
                    redirect: `/articles`
                });
            });
        });
    }
    return res.send({
        statusText: "fail",
        message: "failed to delete article",
        redirect: `/articles`
    });
});

module.exports = router;
