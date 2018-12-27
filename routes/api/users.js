const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @desc    tests the users route.
// @acess   PUBLIC
router.get("/test", (req, res) => {
  res.json({ msg: "users works" });
});

module.exports = router;
