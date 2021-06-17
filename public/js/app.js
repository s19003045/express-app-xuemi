const express = require("express");
const app = express();
const path = require("path");

// import image
// const image0 = require("./image/asian-man-barista-holding-tablet-checking-order-from-customer-coffee-cafe.jpg");

// import text
// const text0 = require("./txt/readme.txt");

// import css

// 設定 public folder
app.use(express.static("public"));

app.use("/image", express.static("public/image"));

app.use("/text", express.static("public/txt"));

app.use("/style", express.static("public/style"));

app.use("/video", express.static("public/video"));

app.use("/js", express.static("public/js"));

app.get("/", function (req, res) {
    res.send("hello world");
});

app.get("/articles", (req, res) => {
    res.send(
        `<p>Do sint elit consequat commodo ullamco fugiat minim. Et commodo deserunt mollit ea reprehenderit laborum aliqua nulla veniam duis commodo enim occaecat. Officia eu aute mollit cupidatat.</p>

        <p>Dolore anim labore mollit nisi dolore. Eiusmod labore enim aute magna ex nostrud anim id nostrud incididunt dolore ea. Minim amet eu Lorem ipsum cillum veniam voluptate labore duis deserunt occaecat aute aute. Mollit id minim do dolore consequat ex. Officia non reprehenderit veniam aliqua exercitation. Elit sit anim occaecat minim adipisicing adipisicing. Consequat non incididunt proident eu occaecat fugiat Lorem ea aute.</p>

        <p>Quis quis amet dolor est ipsum pariatur reprehenderit officia quis id. Officia laboris nulla fugiat nostrud nisi sunt anim sit. Proident anim Lorem elit quis do do aute magna anim. Aute occaecat velit cupidatat non eu in labore elit Lorem qui consequat irure tempor.</p>`
    );
});

app.get("/link", (req, res) => {
    return res.status(404).end();
});

app.get("/html", (req, res) => {
    const absPath = path.join(__dirname, "./template/index.html");
    console.log(absPath);
    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

// 回傳 image
app.get("/img", (req, res) => {
    const absPath = path.join(
        __dirname,
        "./public/image/asian-man-barista-holding-tablet-checking-order-from-customer-coffee-cafe.jpg"
    );

    // 傳給使用者, 並且透過瀏覽器下載
    // return res.download(absPath, (err) => {
    //     console.log(err);
    // });

    console.log(absPath);
    // 傳給使用者, 並且透過瀏覽器顯示
    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

// 回傳 css

// 回傳 txt

// 回傳影片

app.get("/*", (req, res) => {
    res.send("Not found");
});
app.listen(3000, () => {
    console.log("express app listen on port 3000");
});
