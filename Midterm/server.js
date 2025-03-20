const express = require("express");
const app = express();

const seeds = [
    {imgURL:"/images/broccoli.png", name:"broccoli"}, 
    {imgURL:"/images/cabbage.png", name:"cabbage"}, 
    {imgURL:"/images/carrot.png", name:"carrot"}, 
    {imgURL:"/images/chomper.webp", name:"chomper"}, 
    {imgURL:"/images/garlic.png", name:"garlic"}, 
    {imgURL:"/images/pepper.png", name:"pepper"}, 
    {imgURL:"/images/pumpkin.png", name:"pumpkin"}, 
    {imgURL:"/images/radish.png", name:"radish"}, 
    {imgURL:"/images/redcabbage.webp", name:"redcabbage"}, 
    {imgURL:"/images/snowpea.webp", name:"snowpea"}, 
    {imgURL:"/images/snowpeashooter.png", name:"snowpeashooter"}, 
    {imgURL:"/images/spinach.png", name:"spinach"}, 
    {imgURL:"/images/tomato.png", name:"tomato"}, 
    {imgURL:"/images/whitepumpkin.png", name:"whitepumpkin"}];

app.set("views", "views");
app.set("view engine", "pug");

// Lets me receive form data from POSTs, not sure why
app.use(express.urlencoded({ extended: true })); 

app.use(express.static("public"));
//app.use(express.static("public/styles.css"));

app.get("/", (req, res) => {
    res.render("home", {seeds});
});

app.post("/name", (req, res) => {
    console.log(req.body);
    res.render("certificate", {name: req.body.name});
});

app.listen(3020, () => {
    console.log("Listening on port 3020...\n");
});

