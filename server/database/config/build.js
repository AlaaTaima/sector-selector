/** @format */

const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

const dbBuild = () => {
	const sqlBuild = readFileSync(join(__dirname, 'build.sql')).toString();
	const sectorBuild = readFileSync(join(__dirname, 'sectors.sql')).toString();
	return connection.query(sqlBuild + sectorBuild);
};

module.exports = dbBuild;
