const express = require("express");
const app = express();

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

app.get("/*", (req, res) => {
    res.send("Not found");
});
app.listen(3000, () => {
    console.log("express app listen on port 3000");
});
