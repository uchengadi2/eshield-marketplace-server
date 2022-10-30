const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const relatedProductSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    relatedProduct: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    vendor: {
      type: mongoose.Schema.ObjectId,
      ref: "Vendor",
    },
    relatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const RelatedProduct = mongoose.model("RelatedProduct", relatedProductSchema);

module.exports = RelatedProduct;
