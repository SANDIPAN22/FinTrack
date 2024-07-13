const { transactions } = require("../dummyData/data");

exports.transactionResolver = {
  Query: {
    transactions: () => {
      return transactions;
    },
  },
  Mutation: {},
};
