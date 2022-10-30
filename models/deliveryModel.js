const mongoose = require("mongoose");
const validator = require("validator");

const deliverySchema = new mongoose.Schema(
  {
    refNumber: {
      type: String,
      required: true,
      unique: true,
    },

    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    productVendor: {
      type: mongoose.Schema.ObjectId,
      ref: "Vendor",
    },

    quantity: {
      type: Number,
    },

    sourceState: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    sourceCountry: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },
    deliveryCost: {
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
    destinationState: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    destinationCountry: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },

    customer: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["assigned", "on-transit", "returned", "completed"],
    },
    returnReason: {
      type: String,
      trim: true,
    },
    logisticsPartner: {
      type: mongoose.Schema.ObjectId,
      ref: "LogisticsPartner",
    },
    dateAssigned: {
      type: Date,
    },
    assignedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;
