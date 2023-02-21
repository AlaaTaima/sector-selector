/** @format */

const { addSelectorsQuery } = require('../../database/quires/index');

const addSelectors = async (req, res, next) => {
	try {
		await addSelectorsQuery(req.body);
		res.json({ msg: 'sector has been created successfully' });
	} catch (error) {
		next(error);
	}
};

module.exports = { addSelectors };
