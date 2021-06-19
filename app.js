const express = require("express");
const app = express();
const path = require("path");

// 設定 public folder
app.use("/static", express.static("public"));

// 根路由
app.get("/", function (req, res) {
    res.send("hello world");
});

// 回傳文字訊息 or html tag
app.get("/articles", (req, res) => {
    res.send(
        `<p>Do sint elit consequat commodo ullamco fugiat minim. Et commodo deserunt mollit ea reprehenderit laborum aliqua nulla veniam duis commodo enim occaecat. Officia eu aute mollit cupidatat.</p>

        <p>Dolore anim labore mollit nisi dolore. Eiusmod labore enim aute magna ex nostrud anim id nostrud incididunt dolore ea. Minim amet eu Lorem ipsum cillum veniam voluptate labore duis deserunt occaecat aute aute. Mollit id minim do dolore consequat ex. Officia non reprehenderit veniam aliqua exercitation. Elit sit anim occaecat minim adipisicing adipisicing. Consequat non incididunt proident eu occaecat fugiat Lorem ea aute.</p>

        <p>Quis quis amet dolor est ipsum pariatur reprehenderit officia quis id. Officia laboris nulla fugiat nostrud nisi sunt anim sit. Proident anim Lorem elit quis do do aute magna anim. Aute occaecat velit cupidatat non eu in labore elit Lorem qui consequat irure tempor.</p>`
    );
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
