let employees = [
  { name: "Aisha", salary: 30000 },
  { name: "Rahul", salary: 35000 },
  { name: "Meena", salary: 28000 },
];

employees.forEach( (emp) => {
    console.log(`${emp.name} earns INR ${emp.salary} per month`);
})

let employeesUpdated = employees.map( emp => ({
    name: emp.name,
    salary: emp.salary + 2000
}))

console.log(employeesUpdated);