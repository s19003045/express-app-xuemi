const express = require("express");
const app = express();
const path = require("path");

// 設定 public folder
app.use(express.static("public"));

app.use("/html", express.static("public/html"));

app.use("/image", express.static("public/image"));

app.use("/text", express.static("public/txt"));

app.use("/style", express.static("public/style"));

app.use("/video", express.static("public/video"));

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

// 取得 html
app.get("/getHtml", (req, res) => {
    // 方法一：
    // return res.redirect("/html/index.html");

    // 方法二：res.send(樣板字面值)
    // console.log("方法二");
    // return res.send(`
    //     <!DOCTYPE html>
    //     <html lang="en">
    //         <head>
    //             <meta charset="UTF-8" />
    //             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //             <title>Document</title>
    //         </head>
    //         <body>
    //             <h1>This is html file</h1>
    //         </body>
    //     </html>
    // `);

    // 方法二：res.sendFile
    const absPath = path.join(__dirname, "./template/index.html");
    console.log(absPath);
    return res.contentType("text/html").sendFile(absPath, (err) => {
        console.log(err);
    });
});

// 取得 image
app.get("/getImage", (req, res) => {
    // 方法一：
    // return res.redirect(
    //     "/image/asian-man-barista-holding-tablet-checking-order-from-customer-coffee-cafe.jpg"
    // );
    // 方法二：
    // const absPath = path.join(
    //     __dirname,
    //     "./template/image/asian-man-barista-holding-tablet-checking-order-from-customer-coffee-cafe.jpg"
    // );

    // // 傳給使用者, 並且透過瀏覽器下載
    // // return res.download(absPath, (err) => {
    // //     console.log(err);
    // // });

    // console.log(absPath);
    // // 傳給使用者, 並且透過瀏覽器顯示
    // return res.sendFile(absPath, (err) => {
    //     console.log(err);
    // });

    // 方法三：放在 html 中, img src 要設定 public folder
    // return res.send(`
    //     <!DOCTYPE html>
    //     <html lang="en">
    //         <head>
    //             <meta charset="UTF-8" />
    //             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //             <title>Document</title>
    //         </head>
    //         <body>
    //             <h1>Below is image</h1>
    //             <img
    //                 width="600"
    //                 src="/image/asian-man-barista-holding-tablet-checking-order-from-customer-coffee-cafe.jpg"
    //                 alt=""
    //                 srcset=""
    //             />
    //         </body>
    //     </html>

    // `);

    // 方法四：
    const absPath = path.join(__dirname, "./template/mainImageCSS.html");

    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

// 取得 txt
app.get("/getTxt", (req, res) => {
    console.log("getText");
    // 方法一：
    // return res.redirect("/txt/readme.txt");

    // 方法二：
    const absPath = path.join(__dirname, "public/txt/readme.txt");
    console.log(absPath);
    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

// 回傳 css

// 回傳影片

// redirect
app.get("/where", (req, res) => {
    res.redirect(302, "https://www.youtube.com");
});

app.get("/*", (req, res) => {
    res.send("Not found");
});

app.listen(3000, () => {
    console.log("express app listen on port 3000");
});
