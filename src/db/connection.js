import myslq from 'mysql2/promise';
import config from '../config/conf.js';


const connection = await myslq.createConnection({

    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database

});

export default connection;