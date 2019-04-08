const express = require("express");
const app = express();
const port = 9000;

app.get("/bye", (req, res) => {
	return res.send("bubye!");
});

app.get("/hello", (req, res) => res.send("hey there"));

app.get("/users/:userId/:email", (req, res) => {
	let uid = parseInt(req.params.userId);
	let email = req.params.email;

	res.send(`user ${uid}'s email set to ${email}`);
});

app.get("/numbers/:from-:to", (req, res) => {
	let a = parseInt(req.params.from);
	let b = parseInt(req.params.to);

	let html = "";

	if (a > b) {
		let t = a;
		a = b;
		b = t;
	}

	for (let x = a; x <= b; x++) {
		html += `<div>${x}</div>`;
	}

	res.send(html);
});

app.listen(port, function() {
	return console.log("Sample App " + port + "!");
});
