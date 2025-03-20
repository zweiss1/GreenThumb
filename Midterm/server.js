const express = require("express");
const app = express();

app.set("views", "views");
app.set("view engine", "pug");

app.use(express.static("public"));
//app.use(express.static("public/styles.css"));

app.get("/", (req, res) => {
    res.render("home", {seeds:[{imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}, {imgURL:"/images/flower_27.jpg", name:"the_flower"}]});
});

app.listen(3020, () => {
    console.log("Listening on port 3020...\n");
});

