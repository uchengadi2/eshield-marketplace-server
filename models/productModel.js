const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, "Every product must have a name"],
    },
    shortDescription: {
      type: String,
      trim: true,
    },
    fullDescription: {
      type: String,
      trim: true,
    },
    sku: {
      type: String,
    },
    refNumber: {
      type: String,
    },
    imageCover: {
      type: String,
      required: [false, "Please provide the image cover"],
    },
    firstImage: {
      type: String,
    },

    secondImage: {
      type: String,
    },
    thirdImage: {
      type: String,
    },
    fourthImage: {
      type: String,
    },

    totalUnits: {
      type: Number,

      required: [false, "A product must have quanyity"],
    },
    remainingTotalUnits: {
      type: Number,
    },

    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
      },
    ],
    vendor: {
      type: mongoose.Schema.ObjectId,
      ref: "Vendor",
    },
    make: {
      type: String,
    },
    model: {
      type: String,
    },

    color: {
      type: String,
    },
    size: {
      type: String,
    },
    design: {
      type: String,
    },
    weightPerUnit: {
      type: Number,
    },
    content: {
      type: String,
    },
    smell: {
      type: String,
    },
    taste: {
      type: String,
    },
    feel: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    reliability: {
      type: String,
    },
    safety: {
      type: String,
    },
    packaging: {
      type: String,
    },
    marketingClaims: {
      type: String,
    },
    durability: {
      type: String,
    },
    pricePerUnit: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },
    ranking: {
      default: 1,
      type: Number,
    },
    keyword1: {
      type: String,
    },
    keyword2: {
      type: String,
    },
    keyword3: {
      type: String,
    },
    locationCountry: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },
    location: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    minimumQuantity: {
      type: Number,
    },
    unit: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;