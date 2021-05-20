const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-abhishek:@Bhi2001@cluster0.axydn.mongodb.net/AAdevelopersDB", { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = {
    name: String,
    email: String,
    message: String
}

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/client", function(req, res) {
    res.render("client");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

app.get("/privacy", function(req, res) {
    res.render("privacy");
});

app.post("/contact", function(req, res) {
    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    post.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/contact");
            // alert("your message has been send");
        }
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, function() {
    console.log("server has been started.")
});