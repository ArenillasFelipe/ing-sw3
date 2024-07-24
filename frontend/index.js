document.addEventListener('DOMContentLoaded', function () {
    renderEmployees();
});

async function getEmployees(name = '') {
    try {
        let url = name ? `https://pacific-wave-13397-31b04e68149c.herokuapp.com/employee/${name}` : 'https://pacific-wave-13397-31b04e68149c.herokuapp.com/employees';
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data); // Aquí deberías ver el array de empleados
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return []; // Devuelve un array vacío en caso de error
    }
}
//
async function renderEmployees(name = '') {
    let employees = await getEmployees(name);
    console.log(employees);

    let employeeListContainer = document.getElementById('employeeListContainer');
    employeeListContainer.innerHTML = ''; // Asegúrate de limpiar el contenedor antes de agregar contenido

    employees.forEach(employee => {
        employeeListContainer.innerHTML += `<div class="employeeCard">
            <div class="nameContainer">
                <p class="employeeName">${employee.name}<p>
            </div>
            <div class="salaryContainer">
                <h2>Salario</h2>
                <p class="employeeSalary">$ ${employee.salary}<p>
            </div>
            <button class="deleteButton" onclick="deleteEmployee(${employee.id})">Eliminar</button>
        </div>`; // Actualiza con los campos relevantes
    });
}

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    let inputName = document.getElementById("inputName").value;
    let inputSalary = document.getElementById("inputSalary").value;

    inputName = inputName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

    // Aquí puedes agregar la lógica para enviar los datos al backend
    postEmployee(inputName, inputSalary);
});

async function postEmployee(inputName, inputSalary) {
    try {
        let response = await fetch('https://pacific-wave-13397-31b04e68149c.herokuapp.com/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: inputName, salary: inputSalary })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let data = await response.json();
        console.log('Employee added:', data);

        // Volver a renderizar la lista de empleados al finalizar la inserción
        renderEmployees();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function deleteEmployee(employeeId) {
    try {
        let response = await fetch(`https://pacific-wave-13397-31b04e68149c.herokuapp.com/employees/${employeeId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        console.log('Employee deleted:', employeeId);

        // Volver a renderizar la lista de empleados al finalizar la eliminación
        renderEmployees();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let searchName = document.getElementById("inputSearch").value;
    renderEmployees(searchName);
});

//aa