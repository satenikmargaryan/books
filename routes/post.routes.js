const express = require("express");
const router = express.Router();

const post_controller = require("../controllers/post.controller");

router.get("/:id", post_controller.post_details);
router.post("/create", post_controller.post_create);

module.exports = router;
