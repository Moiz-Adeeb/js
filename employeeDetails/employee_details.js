const employees = [
    { id: 1 , name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2 , name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python'},
    { id: 3 , name: 'Bob Johnshon', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    // More employees can be added here
];

function displayEmployees() {
    // Function to Display all employees
    const totalemployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} -$${employee.salary} | ${employee.specialization}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalemployees;
}  

function calculateTotalSalaries() {
    const totalSalries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);

    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no Employee has been foun with this ID';
    }
}

function findEmployeeBySpecialization(employeespecialization) {
    const findEmployee = employees.find(employee => employee.specialization === employeespecialization);

    if (findEmployee) {
        document.getElementById('employeeDetails').innerHTML = `<p>${findEmployee.id}: ${findEmployee.name}: ${findEmployee.age} - ${findEmployee.department} - ${findEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this specialization';
    }
}

