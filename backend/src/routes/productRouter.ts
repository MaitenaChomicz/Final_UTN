import { Router } from "express"
import { createProduct, deleteProduct, getAllProducts, updateProduct, Busqueda } from "../controllers/productControllers"
import { authMiddleware } from "../middleware/authMiddleware"

const productRouter = Router()

productRouter.get("/", getAllProducts)
productRouter.post("/", authMiddleware, createProduct)
productRouter.delete("/:id", authMiddleware, deleteProduct)
productRouter.patch("/:id", authMiddleware, updateProduct)

productRouter.get("/search", Busqueda)

export { productRouter }