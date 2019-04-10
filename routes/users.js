const router = require("express").Router();
const userController = require("../controllers/user");

router.get("/", (req, res) => {
	userController.allUsers(req, res);
});

router.get("/:userId", (req, res, next) => {
	let uid = parseInt(req.params.userId);
	userController.getUser(uid, req, res, next);
});

module.exports = router;
