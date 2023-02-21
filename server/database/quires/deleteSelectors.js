
/** @format */

const connection = require('../config/connection');

const delSelectorsQuery = () => connection.query('DELETE FROM user_sectors');

module.exports = delSelectorsQuery;


