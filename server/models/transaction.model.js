const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 40,
  },
  category: {
    type: String,
    enum: ["income", "investment", "expense"],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  paymentType: {
    type: String,
    enum: ["CASH", "CREDIT_CARD", "DEBIT_CARD", "UPI"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    required: true,
    type: Date,
  },
});

exports.transactionModel = mongoose.model("Transaction", transactionSchema);
