const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const employeeService = require("../service/employeesData");

const schema = buildSchema(`
    type Query {
        employees: [Employee]
        employee(id: Int!): Employee
    }
    type Mutation {
        createEmployee(name: String!, department: String!): Employee
        deleteEmployee(id: Int!): DeleteEmployeeResponse
    }
    type DeleteEmployeeResponse {
        id: Int!
    }
    type Employee {
        id: Int!
        name: String!
        department: String!
    }
`);

const root = {
  employees: employeeService.getAll(),
  employee: (graphqlInput) =>
    employeeService.getById(graphqlInput && graphqlInput.id),
  createEmployee: (graphqlInput) => employeeService.save(graphqlInput),
  deleteEmployee: (graphqlInput) => employeeService.deleteById(graphqlInput.id),
};

const graphql = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = graphql;
