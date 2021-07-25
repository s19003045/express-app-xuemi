const btnSubmit = document.querySelector("button.btn-submit");
const btnDel = document.querySelector("button.btn.btn-delete");

const getInputValueById = (id) => {
    const ele = document.getElementById(id);
    return ele && ele.value;
};

if (btnSubmit) {
    btnSubmit.addEventListener("click", function (e) {
        const articleId = btnSubmit.dataset.articleId;
        const url = btnSubmit.dataset.url;
        const method = btnSubmit.dataset.method;

        const data = {
            articleId: articleId,
            title: getInputValueById("title"),
            subTitle: getInputValueById("subtitle"),
            content: getInputValueById("content")
        };

        axios({
            method: method,
            url: url,
            data: data
        }).then((res) => {
            if (res.data.statusText === "ok") {
                // 轉址
                window.location.assign(res.data.redirect || "/articles");
            } else {
                alert(res.data.message || "there is something wrong.");
            }
        });
    });
}

if (btnDel) {
    btnDel.addEventListener("click", function (e) {
        const url = btnDel.dataset.url;
        const method = btnDel.dataset.method;

        axios({
            method: method,
            url: url
        }).then((res) => {
            if (res.data.statusText === "ok") {
                // 轉址
                window.location.assign(res.data.redirect || "/articles");
            } else {
                alert(res.data.message || "there is something wrong.");
            }
        });
    });
}
