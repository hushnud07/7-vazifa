import productService from "../services/product.Service.js";

class productController {
  constructor() {
    this.productService = new productService();
  }
  async getCatigoryController(req, res) {
    try {
      const data = await this.productService.getCatigori();
      res.statusCode = 200;
      res.send(data);
    } catch (error) {
      res.statusCode = 400;
      res.send(console.error({ message: error.message }));
    }
  }
}

export default productController;
