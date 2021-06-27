const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");

// 設定樣版引擎
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// 設定 public folder
app.use("/static", express.static("public"));

// 根路由
app.get("/", function (req, res) {
    res.render("home");
    // res.send("hello world");
});

// 回傳文字訊息 or html tag
app.get("/articles", (req, res) => {
    res.render("articles");
});

app.get("/about", (req, res) => {
    res.render("about");
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
