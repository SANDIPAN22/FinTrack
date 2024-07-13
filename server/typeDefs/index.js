const { mergeTypeDefs } = require("@graphql-tools/merge");

const { userTypeDef } = require("./user.typeDefs");
const { transactionTypeDef } = require("./transaction.typeDefs");

exports.mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);
