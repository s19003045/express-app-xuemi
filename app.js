const express = require("express");
const app = express();
const path = require("path");
// const exphbs = require("express-handlebars");

// 載入 exphbs instance
const { hbs } = require("./exphbsSetting");

//
const articles = require("./data/articles");

// 設定樣版引擎
// 1. 使用 exphbs
// app.engine("handlebars", exphbs());
// 2. 使用 exphbs instance
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// 設定 public folder
app.use("/static", express.static("public"));

// 根路由
app.get("/", function (req, res) {
    res.render("home");
    // res.send("hello world");
});

// 單篇文章
app.get("/articles/:id", (req, res) => {
    const id = req.params.id;
    res.render("article", {
        articles: [articles[id]],
        backUrl: "/articles",
    });
    // res.render("articles", context);
});

// 文章列表
app.get("/articles", (req, res) => {
    res.render("articles", { articles: articles });
});

app.get("/about", (req, res) => {
    res.render("about");
});

// login page
app.get("/login", function (req, res) {
    res.render("login");
});

// 取得 txt
app.get("/getTxt", (req, res) => {
    // res.sendFile
    const absPath = path.join(__dirname, "./file/txt/test.txt");

    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

// 取得 html
app.get("/getHtml", (req, res) => {
    // res.sendFile
    const absPath = path.join(__dirname, "./file/html/main.html");

    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

// 取得 image
app.get("/getImage", (req, res) => {
    // res.sendFile
    const absPath = path.join(
        __dirname,
        "./file/image/bruno-thethe-wSaVpwcleWo-unsplash.jpg"
    );

    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

app.get("/*", (req, res) => {
    res.send("Not found");
});

app.listen(3000, () => {
    console.log("express app listen on port 3000");
});
