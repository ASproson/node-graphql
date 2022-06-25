# Node Graphql

Demo project for Node and GraphQL

## Installation

> npm i


> node server.js


> localhost:8080/graphql

<br />

## GraphQL Queries

Get all users:

```GraphQL
query {
  getAllUsers {
    firstName,
    lastName,
    email,
    password,
    id
  }
}
```
<br />


Add new user:

```GraphQL
mutation {
  createUser (firstName: "Max", lastName: "Schwarz", email:"dummy@email.com", password: "password"){
    firstName,
    lastName,
    email,
    password,
  }
}
```