
/** @format */

const { getuserDataQuery } = require('../../database/quires/index');

const getUserData = async (req, res, next) => {
	try {
		const { rows } = await getuserDataQuery();
		res.json(rows);
	} catch (err) {
		console.log({err});
		next(err);
	}
};

module.exports = { getUserData };
