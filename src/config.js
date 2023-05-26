import {config} from 'dotenv'; //para uso de variables de entorno

config()

export const PORT=process.env.PORT || 3000;

export const PORT_DB=process.env.DB_PORT || 3306;
export const USER=process.env.DB_USER || 'root';
export const PASSWORD=process.env.DB_PASSWORD;
export const HOST=process.env.DB_HOST || 'localhost';
export const DATABASE=process.env.DB_DATABASE || 'companydb';

console.log(process.env.PORT); //asi se obtienen