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
