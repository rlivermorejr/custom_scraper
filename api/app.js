const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 9000;

const indexRoute = require("./routes/index");
const scrapeRoute = require("./routes/scrape.js");

// view engine setup
app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"));

// Routes
app.use("/", indexRoute);
app.use("/scrape", scrapeRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
