const typeDefs = `#graphql  

    type User {
        id: ID
        email: String
        username: String
        password: String
        name: Name
        address: Address
        phone: String
    }

    type Name {
        firstname: String
        lastname: String
    }

    type Address {
        city: String
        street: String
        number: Int
        zipcode: String
        geolocation: Geolocation
    }
    type Geolocation {
        lat: String
        long: String
    }

    type Query {
        users: [User!]
        user(id: ID!): User
    }
`;
module.exports = typeDefs;
