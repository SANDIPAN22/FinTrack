exports.transactionTypeDef = `#graphql
    type Transaction {
        id: ID!
        userId: ID!
        description: String!
        category: String!
        paymentType: String!
        amount: Float!
        date: String!
    }


    type Query {
        transactions: [Transaction!]
        transaction(id: ID!): Transaction!
    }

    type Mutation {
        createTransaction(input: CreateTransactionInput!): Transaction!
        updateTransaction(input: UpdateTransactionInput!): Transaction!
        deleteTransaction(transactionId: ID!): Transaction!
    }

    input CreateTransactionInput {  
        description: String!
        category: String!
        paymentType: String!
        amount: Float!
        date: String!
    }

    input UpdateTransactionInput {
        transactionId: ID!
        description: String
        category: String
        paymentType: String
        amount: Float
        date: String
    }


`;
