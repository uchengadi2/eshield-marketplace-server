const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
    },
    cartId: {
      type: mongoose.Schema.ObjectId,
      ref: "Cart",
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    quantityAdddedToCart: {
      type: Number,
    },
    orderedQuantity: {
      type: Number,
    },
    orderedPrice: {
      type: Number,
    },
    productCurrency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    productLocation: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    locationCountry: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },
    totalDeliveryCost: {
      type: Number,
    },
    totalProductCost: {
      type: Number,
    },
    recipientName: {
      type: String,
    },
    recipientPhoneNumber: {
      type: String,
    },
    recipientAddress: {
      type: String,
    },
    recipientState: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    recipientCountry: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },
    dateAddedToCart: {
      type: Date,
    },

    dateOrdered: {
      type: Date,
      default: Date.now,
    },
    orderedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    paymentStatus: {
      type: String,
      enum: ["to-be-confirmed", "paid-but-awaiting-confirmation", "paid"],
    },
    paymentMethod: {
      type: String,
      enum: ["cheque", "card", "bank-transfer", "cash"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
