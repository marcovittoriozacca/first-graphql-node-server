# Node.js GraphQL Server with Apollo and TypeScript  

This project sets up a simple `Node.js` server using `GraphQL` with `Apollo Server` and `TypeScript` . The main goal is to demonstrate how to define type definitions (typeDefs) and resolvers in a GraphQL API. The project uses the Fakestore API to fetch datas.

To uinstall this project:
    - git clone `<repository-url>`
    - cd `<repository-directory>`
    - npm install
    - npm start

## Executing a Query in Apollo

To execute a query using Apollo, you can use the Apollo Server's GraphQL Playground, a powerful interactive in-browser tool for testing GraphQL queries and mutations.

In the Playground, you can write your GraphQL queries. For example, to fetch all users or a single user by ID, you can use the following queries:

### All Users (no params needed)

```graphql
    query GetUsers{
        users {
            username
            name {
                firstname
                lastname
            }
            email
            address {
                city
                street
            }
        }
    }
```

### Single User (id needed)

```graphql
query GetUser {
    user(id: 1) {
        username
        email
        address {
            city
            zipcode
        }
    }
}
```

The Apollo Playground includes comprehensive documentation for all endpoints and properties of each entity in your schema. You can refer to this documentation to see the properties available for the `User` entity and understand what data can be extracted through GraphQL queries.
