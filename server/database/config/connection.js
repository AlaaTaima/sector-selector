/** @format */

require('env2')('./config.env');
const { Pool } = require('pg');

let dbUrl;
switch (process.env.NODE_ENV) {
	case 'production':
		dbUrl = process.env.DATABASE_URL;
		break;
	case 'development':
		dbUrl = process.env.DEVDB_URL;
		break;
	default:
		throw new Error('No Database URL!!!');
}

const options = {
	connectionString: dbUrl,
	ssl: {
		rejectUnauthorized: true,
	},
};

module.exports = new Pool(options);
