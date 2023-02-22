/** @format */

const {
	addSelectorsQuery,
	delSelectorsQuery,
} = require('../../database/quires/index');

const updateSelectors = async (req, res, next) => {
	try {
		await delSelectorsQuery();
		await addSelectorsQuery(req.body);
		res.json({ msg: 'sector has been updated successfully' });
	} catch (error) {
		next(error);
	}
};

module.exports = { updateSelectors };
