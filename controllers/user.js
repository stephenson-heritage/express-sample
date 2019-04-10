const userModel = require("../model/user");
const cfgControllers = require("../config/controller");

module.exports = class {
	static async allUsers(req, res) {
		let users = await userModel.getUsers();

		let data = {
			title: "User List",
			users: users
		};
		if (cfgControllers.json) {
			return res.json(data);
		} else {
			return res.render("users", data);
		}
	}
	static async getUser(userId, req, res, next) {
		let user = await userModel.getUser(userId);

		if (user[0]) {
			user = user[0];
			let data = {
				title: "User",
				user: user
			};
			if (cfgControllers.json) {
				return res.json(data);
			} else {
				return res.render("users", data);
			}
		} else {
			next();
		}
	}
};
