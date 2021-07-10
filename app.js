const express = require("express");
const app = express();
const path = require("path");
// const exphbs = require("express-handlebars");

// 載入 exphbs instance
const { hbs } = require("./exphbsSetting");

// 設定樣版引擎
// 1. 使用 exphbs
// app.engine("handlebars", exphbs());
// 2. 使用 exphbs instance
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// 設定 public folder
app.use("/static", express.static("public"));

app.use("/", require("./routes"));

app.listen(3000, () => {
    console.log("express app listen on port 3000");
});
