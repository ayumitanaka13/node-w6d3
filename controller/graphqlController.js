const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const employeeService = require("../service/employeesData");

const schema = buildSchema(`
    type Query {
        employees: [Employee]
    }
    type Employee {
        id: Int!
        name:String!
        department:String!
    }
`);

const root = {
  employees: employeeService.getAll(),
};

const graphql = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = graphql;
