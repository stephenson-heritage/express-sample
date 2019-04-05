const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => res.send("hello!"));
app.get("/user/:username", (req, res) =>
	res.send("Welcome : " + req.params.username)
);

app.listen(port, function() {
	return console.log("Sample App " + port + "!");
});
