const axios = require("axios");
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
    },
};
module.exports = resolvers;
