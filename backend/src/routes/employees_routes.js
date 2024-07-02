import { Router } from "express";
import { pool } from "../db.js";

const router = Router();


// Obtener todos los empleados
router.get('/employees', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM employees');
        res.json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Insertar un nuevo empleado
router.post('/employees', async (req, res) => {
    const { name, salary } = req.body;

    try {
        const [result] = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Actualizar un empleado
router.put('/employees/:id', async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;

    try {
        const [result] = await pool.query('UPDATE employees SET name = ?, salary = ? WHERE id = ?', [name, salary, id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Employee not found' });
        } else {
            res.json({ message: 'Employee updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Eliminar un empleado
router.delete('/employees/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Employee not found' });
        } else {
            res.json({ message: 'Employee deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});




export default router;