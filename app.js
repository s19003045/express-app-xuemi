const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");

// 載入 exphbs instance
const { hbs } = require("./exphbsSetting");

// 設定樣版引擎
// 1. 使用 exphbs
// app.engine("handlebars", exphbs());
// 2. 使用 exphbs instance
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// parse req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const logger = (req, res, next) => {
    // // originalUrl = baseUrl + url
    // console.log("1. baseUrl", req.baseUrl);
    // console.log("2. url", req.url);
    // console.log("3. originalUrl", req.originalUrl);
    // console.log("4. hostname", req.hostname);

    // next();
    const datetime = new Date();
    const timeStamp = datetime.toString() + "   " + req.originalUrl + "\n";
    console.log("timeStamp", timeStamp);

    // next();

    // 較簡潔的寫法
    fs.writeFile(
        path.join(__dirname, "./log/log.txt"),
        timeStamp,
        { flag: "a+" },
        (err) => {
            if (err) console.log(err);
            next();
        }
    );

    // // 先讀取檔案, 再寫入檔案
    // fs.readFile(path.join(__dirname, "./log/log.txt"), (err, data) => {
    //     if (err) console.log(err);
    //     // console.log("data", data.toString());

    //     const newData = data ? data.toString() + "\n" + timeStamp : timeStamp;
    //     // 寫入 log.txt
    //     fs.writeFile(path.join(__dirname, "./log/log.txt"), newData, (err) => {
    //         if (err) console.log(err);
    //         next();
    //     });
    // });
};

const errorHandler = (err, req, res, next) => {
    console.log("err", err);
    console.log(err.name, ":", err.message);
    if (err)
        res.status(500).send(`<h1>there is an error:  ${err.message}</h1>`);
};

// logger middleware
app.use(logger);

// 設定 public folder
app.use("/static", express.static("public"));

app.use("/", require("./routes"));

// error handler middleware
app.use(errorHandler);

app.listen(3000, () => {
    console.log("express app listen on port 3000");
});
