const express = require("express");

const ProductOnSaleController = require("./../controllers/ProductsOnSaleController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("partner_admin", "partner_user", "admin"),
    ProductOnSaleController.getAllProductsOnSale
  )
  .post(
    authController.protect,
    authController.restrictTo("partner_admin", "partner_user", "admin"),
    ProductOnSaleController.createProductOnSale
  );

//protect order routes
router.use(authController.protect);

router
  .route("/:id")
  .get(
    authController.restrictTo("partner_admin", "partner_user", "admin"),
    ProductOnSaleController.getProductOnSale
  )
  .patch(
    authController.restrictTo("partner_admin", "partner_user", "admin"),
    ProductOnSaleController.updateProductOnSale
  )
  .delete(
    authController.restrictTo("partner_admin", "admin"),
    ProductOnSaleController.deleteProductOnSale
  );

module.exports = router;
