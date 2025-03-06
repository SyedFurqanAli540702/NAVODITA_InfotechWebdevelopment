const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });

const blogSchema = new mongoose.Schema({ title: String, content: String });
const Blog = mongoose.model("Blog", blogSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    Blog.find({}, (err, posts) => {
        res.json(posts);
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});