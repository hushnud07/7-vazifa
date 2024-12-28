import { Router } from "express";
import productController from "../controllers/product.Controller.js";

const productRouter = Router();

const productControl = new productController();
productRouter.get("/catigory", (req, res) => {
  productControl.getCatigoryController(req, res);
});
export default productRouter;
