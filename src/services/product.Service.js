import ProductModel from "../models/productModel.js";

class productService {
  constructor() {
    this.productModel = ProductModel;
  }
  async getCatigori() {
    const product = this.productModel.aggregate([
      {
        $group: {
          _id: "$category",
          totalProducts: { $sum: "$quantity" },
          totalSales: { $sum: "$price" },
        },
      },
    ]);
    return product;
  }
}

export default productService;
