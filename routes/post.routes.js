const express = require("express");
const router = express.Router();

const post_controller = require("../controllers/post.controller");

router.get("/:id", post_controller.post_details);
router.put("/:id/update", post_controller.update_post);
router.delete("/:id/delete", post_controller.delete_post);
router.post("/create", post_controller.post_create);
router.get("/", post_controller.get_posts);

module.exports = router;
