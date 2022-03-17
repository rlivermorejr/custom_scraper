const express = require("express");
const app = express();
const router = express.Router();

// API key and URL
const API_KEY = "b8db8f63baa02f5383c2e9dee8cf8be0";
const BASE_URL = `http://api.scraperapi.com?api_key=${API_KEY}&autoparse=true`;

// Get Product Details
router.get("/:productId", async (req, res) => {
	const { productId } = req.params;

	try {
		const response = await request(`${BASE_URL}&url=https://www.amazon.com/dp/${productId}`);
		const data = JSON.parse(response);
		res.render("response.ejs", { data: data });
	} catch (error) {
		res.json(error);
	}
});

// router.get("/", function (req, res, next) {
// 	res.send("working");
// });

// Get Product Reviews
// router.get("/products/:productId/reviews", async (req, res) => {
// 	const { productId } = req.params;

// 	try {
// 		const response = await request(`${BASE_URL}&url=https://www.amazon.com/product-reviews/${productId}`);
// 		res.json(JSON.parse(response));
// 	} catch (error) {
// 		res.json(error);
// 	}
// });

// Get List of Products
// router.get("/search/:keyword", async (req, res) => {
// 	const { keyword } = req.params;
// 	const pages = new Array();

// 	try {
// 		const response = await request(`${BASE_URL}&url=https://www.amazon.com/s?k=${keyword}`);
// 		resp = JSON.parse(response);
// 		pages.push(resp.pagination);
// 		console.log(pages);
// 		res.json(resp.results);
// 	} catch (error) {
// 		res.json(error);
// 	}
// });

module.exports = router;

// async function getProductsByProductId(pid) {
// 	const result = [];
// 	try {
// 		const data = await request(`${BASE_URL}&url=https://www.amazon.com/dp/${pid}`);
// 		for (i in data) {
// 			result.push(data[i]);
// 		}
// 		console.log(result);
// 		return result;
// 	} catch (e) {
// 		return e;
// 	}
// }

// app.get("/products/:pid", async function (req, res, next) {
// 	const pid = req.params.pid;
// 	const products = await getProductsByProductId(pid);
// 	res.status(200).send(products);
// });
