const express = require("express");
const router = express.Router();

// 取得 txt
router.get("/getTxt", (req, res) => {
    // res.sendFile
    const absPath = path.join(__dirname, "./file/txt/test.txt");

    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

// 取得 html
router.get("/getHtml", (req, res) => {
    // res.sendFile
    const absPath = path.join(__dirname, "./file/html/main.html");

    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

// 取得 image
router.get("/getImage", (req, res) => {
    // res.sendFile
    const absPath = path.join(
        __dirname,
        "./file/image/bruno-thethe-wSaVpwcleWo-unsplash.jpg"
    );

    return res.sendFile(absPath, (err) => {
        console.log(err);
    });
});

module.exports = router;
