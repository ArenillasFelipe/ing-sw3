import { config } from "dotenv";

config();


export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.PORT || 'root'
export const DB_PASSWORD = process.env.PORT || 'zkYcYtbuNjefhMidWJQYoTLTGuXvTuOJ'
export const DB_HOST = process.env.PORT || 'monorail.proxy.rlwy.net'
export const DB_DATABASE = process.env.PORT || 'railway'
export const DB_PORT = process.env.PORT || '25785'


console.log("DB parameters ", DB_USER, DB_PORT, DB_PASSWORD, DB_DATABASE, DB_HOST);