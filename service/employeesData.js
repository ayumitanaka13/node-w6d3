const employeesData = [
  {
    id: 1,
    name: "Danny",
    department: "IT",
  },
  {
    id: 2,
    name: "Koji",
    department: "IT",
  },
  {
    id: 3,
    name: "Ayumi",
    department: "IT",
  },
  {
    id: 4,
    name: "Nico",
    department: "IT",
  },
];

function validateEmployee(employee) {
  if (!(employee.name && employee.department)) {
    throw new Error("Employee Name and Department are required");
  }
}

function getAll() {
  return employeesData;
}

function save(employee) {
  return employeesData;
}

function save(employee) {
  validateEmployee(employee);
  const newEmployees = employee;
  const lastEmployee = employeesData[employeesData.length - 1] || { id: 0 };
  const lastEmployeeId = lastEmployee.id;
  newEmployee.id = lastEmployeeId + 1;
  employeesData.push(newEmployee);
  return employee;
}

function getById(employeeId) {
  const employee = employeesData.filter((item) => item.id === +employeeId);
  if (employee.length === 0) {
    throw new Error(`Employee Resource with id ${employeeId} not found`);
  }
  return employee[0];
}

function deleteById(employeeId) {
  const employeeIndex = employeesData.findIndex(
    (item) => item.id === +employeeId
  );
  if (employeeIndex === -1) {
    throw new Error(`Employee Resource with id ${employeeId} not found`);
  }
  employeesData.splice(employeeIndex, employeeIndex + 1);
  return { id: employeeId };
}

module.exports = {
  getAll,
  getById,
  save,
  deleteById,
};
