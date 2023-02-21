/** @format */

const connection = require('../config/connection');

const getSectorsQuery = () => connection.query('SELECT list FROM  sectors');

module.exports = getSectorsQuery;
