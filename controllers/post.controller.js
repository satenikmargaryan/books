const Post = require("../models/post.model");

exports.post_details = function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (err) throw err;
    res.send(post);
  });
};

exports.post_create = function (req, res) {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  post.save((err) => {
    if (err) throw err;
    res.send("Post created successfully");
  });
};
