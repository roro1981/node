import {createPool} from 'mysql2/promise';
import {PORT_DB,HOST,DATABASE,USER,PASSWORD} from './config.js';

export const pool=createPool({
    host: HOST,
    port: PORT_DB,
    user: USER,
    password: PASSWORD,   
    database: DATABASE
})