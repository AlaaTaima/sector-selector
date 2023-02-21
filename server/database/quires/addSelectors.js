/** @format */

const connection = require('../config/connection');

const addSelectorsQuery = ({ user_name, saved_list, term_condition }) => {
	const sql = {
		text: 'insert into user_sectors(user_name, saved_list, term_condition) values($1, $2, $3)',
		values: [user_name, saved_list, term_condition],
	};
	return connection.query(sql);
};

module.exports = addSelectorsQuery;
