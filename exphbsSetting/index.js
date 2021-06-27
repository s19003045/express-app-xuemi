const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const path = require("path");

// 註冊 handlebars global helper
Handlebars.registerHelper("link", function (text, url) {
    var url = Handlebars.escapeExpression(url),
        text = Handlebars.escapeExpression(text);

    return new Handlebars.SafeString("<a href='" + url + "'>" + text + "</a>");
});

Handlebars.registerHelper("UpperCase", function (string) {
    if (typeof string !== "string") return "";
    return string.toUpperCase();
});

// 建立 express-handlebars instance
const hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        UpperCase: function (string) {
            // 當 handlebars 與 express-handlebars 註冊相同名稱的 helper 時, express-handlebars 會取得優先次序
            if (typeof string !== "string") return "";
            return string.toUpperCase();
        },
    },
    layoutsDir: path.join(__dirname, "../views/layouts"),
    defaultLayout: "main", // file name or false
    extname: "handlebars",
    partialsDir: path.join(__dirname, "../views/partials"),
});

module.exports = { hbs, Handlebars };
