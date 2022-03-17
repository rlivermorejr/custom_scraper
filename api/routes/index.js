const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index.ejs", { title: "Express", message: "Hello World" });
});

router.get("/about", function (req, res, next) {
	res.render("about.ejs");
});

module.exports = router;
