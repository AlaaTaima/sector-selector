/** @format */

const { serverError } = require('./error/server');
const { clientError } = require('./error/client');

const {
	getUserData,
	addSelectors,
	updateSelectors,
	getSectors
} = require('./routes');

module.exports = {
	serverError,
	clientError,
	getUserData,
	addSelectors,
	updateSelectors,
	getSectors,
};
