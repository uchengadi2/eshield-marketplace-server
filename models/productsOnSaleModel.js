const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const productsOnSaleSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    salesPricePerUnit: {
      type: Number,
    },
    minimumQuantity: {
      type: Number,
    },
    vendor: {
      type: mongoose.Schema.ObjectId,
      ref: "Vendor",
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const ProductsOnSale = mongoose.model("ProductsOnSale", productsOnSaleSchema);

module.exports = ProductsOnSale;
