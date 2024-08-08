const axios = require("axios");
let movies = require("../fakeDB/fake_movies.js");
const resolvers = {
    Query: {
        users: async () => {
            const response = await axios.get("https://fakestoreapi.com/users");
            return response.data;
        },
        user: async (_, args) => {
            const response = await axios.get(`https://fakestoreapi.com/users/${args.id}`);
            return response.data;
        },
        //fake data to use mutations
        movies: () => {
            return movies;
        },
        movie: (_, args) => {
            const _movie = movies.find((m) => m.id == args.id);
            return _movie;
        },
    },
    Mutation: {
        createMovie: (_, args) => {
            const uniqueId = Number(movies[movies.length - 1].id) + 1;
            const newMovie = { ...args.movie, id: uniqueId.toString() };
            movies.push(newMovie);
            return newMovie;
        },
        updateMovie: (_, args) => {
            let updatedMovie;
            movies = movies.map((m) => {
                if (m.id == args.id) {
                    updatedMovie = { ...m, ...args.movie };
                    return updatedMovie;
                }
                return m;
            });
            return updatedMovie;
        },
    },
};
module.exports = resolvers;
