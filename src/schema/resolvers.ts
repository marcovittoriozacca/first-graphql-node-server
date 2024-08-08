const axios = require("axios");
interface Movie {
  id?: number | string;
  title: string;
  description: string;
  release_date: string;
  langs: string[];
}

let movies: Movie[] = require("../fakeDB/fake_movies.js");

const resolvers = {
  Query: {
    users: async (): Promise<object[]> => {
      const response = await axios.get("https://fakestoreapi.com/users");
      return response.data;
    },
    user: async (_: any, args: { id: number | string }): Promise<object> => {
      const response = await axios.get(
        `https://fakestoreapi.com/users/${args.id}`
      );
      return response.data;
    },
    //fake data to use mutations
    movies: (): Movie[] => {
      return movies;
    },
    movie: (_: any, args: { id: number | string }): Movie => {
      const _movie = movies.find((m) => m.id == args.id);
      return _movie;
    },
  },
  Mutation: {
    createMovie: (_: any, args: { movie: Movie }): Movie => {
      const uniqueId: number | string =
        Number(movies[movies.length - 1].id) + 1;
      const newMovie = { ...args.movie, id: uniqueId.toString() };
      movies.push(newMovie);
      return newMovie;
    },
    updateMovie: (
      _: any,
      args: { id: number | string; movie: Partial<Movie> }
    ): Movie => {
      let updatedMovie: Movie;
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
