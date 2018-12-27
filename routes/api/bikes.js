const express = require("express");
const router = express.Router();
// @route   GET api/bikes/test
// @desc    tests the bikes route.
// @acess   PUBLIC
router.get("/test", (req, res) => {
  res.json({ msg: "bikes works" });
});

module.exports = router;
