/** @format */

const getuserDataQuery = require('./getuserData');
const addSelectorsQuery = require('./addSelectors');
const delSelectorsQuery = require('./deleteSelectors');
const getSectorsQuery = require('./getSelectors');

module.exports = {
	getuserDataQuery,
	getSectorsQuery,
	addSelectorsQuery,
	delSelectorsQuery
};
