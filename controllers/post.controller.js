const Post = require("../models/post.model");

exports.post_details = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) throw err;
    res.send(post);
  });
};

exports.update_post = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, result) => {
    if (err) throw err;
    res.send("Post Updated!");
  });
};

exports.delete_post = (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) throw err;
    res.send("Post Deleted!");
  });
};

exports.post_create = (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  post.save((err) => {
    if (err) throw err;
    res.send("Post created successfully");
  });
};

exports.get_posts = (req, res) => {
  Post.find({}, (err, result) => {
    res.send(JSON.stringify(result));
  });
};
