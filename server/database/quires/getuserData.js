/** @format */

const connection = require('../config/connection');

const getuserDataQuery = () => connection.query('SELECT user_name,saved_list,term_condition FROM user_sectors');

module.exports = getuserDataQuery;
