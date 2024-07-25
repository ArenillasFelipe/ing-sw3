import app from './index.js';
import request from 'supertest';

describe("GET /ping to test connection to database", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/ping").send();
        expect(response.statusCode).toBe(200);
    });
});

describe("GET /employees", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/employees").send();
        expect(response.statusCode).toBe(200);
    });

    test("should respond with an array", async () => {
        const response = await request(app).get("/employees").send();
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe("POST /employees", () => {
    let newEmployee = {
        name: "Elon Musk",
        salary: "325465"
    };

    describe("when name and salary is missing", () => {
        test("should respond with a 400 status code", async () => {
            const response = await request(app).post("/employees").send({});
            expect(response.statusCode).toBe(400);
        });
    });

    describe("when only name is missing", () => {
        test("should respond with a 400 status code", async () => {
            const response = await request(app).post("/employees").send({ salary: 23400 });
            expect(response.statusCode).toBe(400);
        });
    });

    describe("when only salary is missing", () => {
        test("should respond with a 400 status code", async () => {
            const response = await request(app).post("/employees").send({ name: "Elon Musk" });
            expect(response.statusCode).toBe(400);
        });
    });

    describe("posting an employee", () => {
        test("should respond with the employee inserted", async () => {

            let response = await request(app).post("/employees").send(newEmployee);
            expect(response.statusCode).toBe(200);
            

            const insertId = response.body.insertId;

            newEmployee.id = insertId;

            response = await request(app).get(`/employees/${insertId}`).send();


            const employee = response.body[0][0];

            expect(response.statusCode).toBe(200);
            expect(employee).toEqual(expect.objectContaining({
                id: insertId,
                name: newEmployee.name,
                salary: parseInt(newEmployee.salary)
            }));
        });
    });

    describe("searching an employee", () => {
        test("should respond with the new employee", async () => {

            let response = await request(app).get(`/employees/${newEmployee.id}`).send();

            const employee = response.body[0][0];

            expect(response.statusCode).toBe(200);
            expect(employee).toEqual(expect.objectContaining({
                id: newEmployee.id,
                name: newEmployee.name,
                salary: parseInt(newEmployee.salary)
            }));
        });
    });


    describe("deleting an employee", () => {
        test("should respond a 200 status code", async () => {
            let response = (await request(app).delete(`/employees/${newEmployee.id}`)).setEncoding();
            expect(response.statusCode).toBe(200);
        });
    });


});
