import express from 'express'
import { pool } from './db.js';
import employeesRoutes from './routes/employees_routes.js';
import { PORT } from './config.js';
import cors from 'cors';


const app = express();
// Configura CORS
app.use(cors());

app.use(express.json());


app.get('/ping', async (req, res) => {
    const [result] = await pool.query('select "pongitooooooasbbifbifibbihf" AS result');
    if (!result) {
        return res.send(500);
    }
    res.json(result[0]);
});

app.use(employeesRoutes);

app.listen(PORT);
console.log("server running on port ", PORT);

export default app;
