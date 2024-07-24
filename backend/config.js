import { config } from "dotenv";

config();


export const PORT = process.env.PORT || 3000;
export const DB_USER = 'ybf7asc3tx5r2lwr'
export const DB_PASSWORD = 'cwc0ijyx1wymv6v6'
export const DB_HOST = 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'
export const DB_DATABASE = 'ulyrfva48bzqj4v7'
export const DB_PORT = '3306'


console.log("DB parameters ", DB_USER, DB_PORT, DB_PASSWORD, DB_DATABASE, DB_HOST);