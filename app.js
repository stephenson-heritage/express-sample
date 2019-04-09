const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

const usersRouter = require("./routes/users");

const port = 9000;

app.use(cookieParser());

app.use((req, res, next) => {
	if (req.cookies.vcount == undefined) {
		req.vcount = 1;
		res.cookie("vcount", 1);
	} else {
		req.vcount = parseInt(req.cookies.vcount) + 1;
		res.cookie("vcount", req.vcount);
	}
	next();
});

app.use("/users", usersRouter);

app.get("/inc", (req, res) => {
	return res.send(path.join(__dirname, "inc"));
});
app.use("/inc", express.static(path.join(__dirname, "inc")));

app.get("/hello", (req, res) => {
	return res.send(req.vcount + "<br>hey there");
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
