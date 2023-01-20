import mysql from 'mysql';
import { promisify } from 'util';
import database from './keys.js';

// Creating connection with Compucontables database test
const pool = mysql.createPool(database);

// Getting connection with Compucontables database test
pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.error('DATABASE CONNECTION WAS CLOSED');
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('DATABASE HAS TO MANY CONNECTIONS');
		}
		if (err.code === 'ECONNREFUSED') {
			console.error('DATABASE CONNECTION WAS REFUSED');
		}
	}
	if (connection) {
		connection.release();
		console.log('DB HAS BEEN CONNECTED');
	}
});

// PROMISIFY POOL QUERIES
pool.query = promisify(pool.query);

export default pool;
