const express = require("express");
const app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.use(express.static("public"));
//app.use(express.static("public/styles.css"));

app.get("/", (req, res) => {
    res.render("home", {seeds:[{imgURL:"/images/flower_27.jpg", name:"the_flower1"}, {imgURL:"/images/flower_27.jpg", name:"the_flower2"}, {imgURL:"/images/flower_27.jpg", name:"the_flower3"}, {imgURL:"/images/flower_27.jpg", name:"the_flower4"}, {imgURL:"/images/flower_27.jpg", name:"the_flower6"}, {imgURL:"/images/flower_27.jpg", name:"the_flower5"}, {imgURL:"/images/flower_27.jpg", name:"the_flower7"}, {imgURL:"/images/flower_27.jpg", name:"the_flower8"}, {imgURL:"/images/flower_27.jpg", name:"the_flower9"}, {imgURL:"/images/flower_27.jpg", name:"the_flower10"}, {imgURL:"/images/flower_27.jpg", name:"the_flower11"}, {imgURL:"/images/flower_27.jpg", name:"the_flower12"}, {imgURL:"/images/flower_27.jpg", name:"the_flower13"}, {imgURL:"/images/flower_27.jpg", name:"the_flower14"}]});
});

app.listen(3020, () => {
    console.log("Listening on port 3020...\n");
});

