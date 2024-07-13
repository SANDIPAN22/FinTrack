const { users } = require("../dummyData/data");

exports.userResolver = {
  Query: {
    users: () => {
      return users;
    },
  },
  Mutation: {},
};
