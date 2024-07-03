import express from 'express'
import { pool } from './db.js';
import employeesRoutes from './routes/employees_routes.js';
import { PORT } from './config.js';


const app = express();

app.use(express.json());


app.get('/ping', async (req, res) => {
    const [result] = await pool.query('select "pong" AS result');
    res.json(result[0]);
});

app.use(employeesRoutes);

app.listen(PORT);
console.log("server running on port ", PORT);