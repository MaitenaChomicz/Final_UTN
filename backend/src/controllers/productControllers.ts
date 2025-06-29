import { Request, Response } from "express"
import { Product } from "../models/productModel"
import { email, success } from "zod/v4"

const getAllProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const products = await Product.find()
    res.json({
      success: true,
      message: "recuperar todos los productos",
      data: products
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, message: err.message })
  }
}

const createProduct = async (req: Request, res: Response): Promise<any> => {
  try {
    const body = req.body

    const { name, price, category } = body

    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "bad request, invalid data"
      })
    }

    const newProduct = new Product({ name, price, category })
    await newProduct.save()

    res.status(201).json({
      success: true,
      messaje: "Successfully created product",
      data: newProduct
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, message: err.message })
  }
}

const deleteProduct = async (req: Request, res: Response): Promise<any> => {
  const id = req.params.id
  try {
    const deletedProduct = await Product.findByIdAndDelete(id)
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }
    res.json({
      success: true,
      message: "Successfully deleted product",
      data: deletedProduct
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, message: err.message })
  }
}

const updateProduct = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id
    const body = req.body

    const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true })

    if (!updateProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }

    res.json({
      success: true,
      message: "Successfully updated product",
      data: updatedProduct
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, message: err.message })
  }
}

const Busqueda = async (req: Request, res: Response): Promise<any> => {
  try {
    const nombreProducto = req.query.name as string;
    if(!nombreProducto){
     return res.status(400).json({ error : 'Datos de busqueda invalidos, intentelo nuevamente.'})
    }
    
    const expresion = new RegExp(nombreProducto, 'i')
    const resultado = await Product.find({ name: expresion })

    if (resultado.length === 0) {
      return res.status(200).json({
        success: true,
        message: `No se encuentra "${nombreProducto}".`,
        data: []
      });
    }

    res.json({
      success: true,
      message: 'Busqueda exitosa!',
      data: resultado,
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({ success: false, message: err.message })
  }
}

export { getAllProducts, createProduct, deleteProduct, updateProduct, Busqueda }