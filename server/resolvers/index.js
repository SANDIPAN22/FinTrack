const { mergeResolvers } = require("@graphql-tools/merge");

const { userResolver } = require("./user.resolver");
const { transactionResolver } = require("./transaction.resolver");

exports.mergedResolvers = mergeResolvers([userResolver, transactionResolver]);
