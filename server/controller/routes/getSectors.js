

/** @format */

const { getSectorsQuery } = require('../../database/quires/index');

const getSectors = async (req, res, next) => {
	try {
		const { rows } = await getSectorsQuery();
		res.json(rows);
	} catch (err) {
		next(err);
	}
};

module.exports = { getSectors };
