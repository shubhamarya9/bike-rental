const express = require("express");
const router = express.Router();
// @route   GET api/comments/test
// @desc    tests the comments route.
// @acess   PUBLIC
router.get("/test", (req, res) => {
  res.json({ msg: "comments works" });
});

module.exports = router;
