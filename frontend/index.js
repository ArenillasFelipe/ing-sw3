// Obtener todos los empleados


getEmployees();

async function getEmployees() {

    console.log("aOSJDFZM ,")

        const response = await fetch('https://ing-sw3-production.up.railway.app/employees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response;

       
}

function renderEmployees(employees) {
    let employeeListContainer = document.getElementById('employeeListContainer');

    employees.forEach(employee => {
        employeeListContainer.innerHTML += `<p>${employee}</p>`
    });
}


formElement.addEventListener("submit", (event) => {

    event.preventDefault();
    let inputName = document.getElementById("inputName");
    let inputSalary = document.getElementById("inputSalary");


    
});
