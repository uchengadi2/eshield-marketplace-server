const mongoose = require("mongoose");
const validator = require("validator");

const cartSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },

    quantity: {
      type: Number,
    },
    refNumber: {
      type: String,
    },
    cartHolder: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dateAddedToCart: {
      type: Date,
      default: Date.now,
    },
    productLocation: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    locationCountry: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
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
    recipientCountry: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },
    recipientState: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    status: {
      type: String,
      default: "unmarked-for-checkout",
      enum: ["unmarked-for-checkout", "marked-for-checkout"],
    },
    totalDeliveryCost: {
      type: Number,
    },
    contactMeForTheDeliveryCost: {
      type: Boolean,
      default: false,
    },
  },

  {
    toJSON: { virtuals: true },
    toObjects: { virtuals: true },
  }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
