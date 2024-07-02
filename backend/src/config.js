import { config } from "dotenv";

config();


export const PORT = process.env.PORT || 3000
export const DB_USER = 'root'
export const DB_PASSWORD = 'zkYcYtbuNjefhMidWJQYoTLTGuXvTuOJ'
export const DB_HOST = 'monorail.proxy.rlwy.net'
export const DB_DATABASE = 'railway'
export const DB_PORT = '25785'


console.log("DB parameters ", DB_USER, DB_PORT, DB_PASSWORD, DB_DATABASE, DB_HOST);