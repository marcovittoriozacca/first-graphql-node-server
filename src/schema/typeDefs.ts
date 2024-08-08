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

    #fake data...
    type Movie {
        id: ID!
        title: String!
        description: String
        release_date: String!
        langs: [String!]
    }

    input CreateMovieInput{
        title: String!
        description: String
        release_date: String!
        langs: [String!]
    }
    input UpdateMovieInput{
        title: String
        description: String
        release_date: String
        langs: [String]
    }

    type Query {
        users: [User!]
        user(id: ID!): User

        movies: [Movie!]
        movie(id: ID!): Movie
    }
    type Mutation {
        createMovie(movie: CreateMovieInput!): Movie
        updateMovie(id: ID!, movie: UpdateMovieInput!): Movie
    }




`;
module.exports = typeDefs;
