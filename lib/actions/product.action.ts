"use server";
import { connectDB } from "../connection";
import { Product } from "../models/product.model";

export async function createProduct(data: ProductRequest) {
  try {
    await connectDB();
    const product = await Product.create(data);
    return product as ProductResponse;
  } catch (error: any) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
}
export async function getAllProduct() {
  try {
    await connectDB();
    const products: ProductResponse[] = await Product.find();
    return products;
  } catch (error: any) {
    throw new Error("Failed to get all products :", error.message);
  }
}
export async function getProductById(productId: string) {
  try {
    await connectDB();
    const product = await Product.findById(productId).populate("category");
    if (!product) throw new Error("Product not found");
    return product as ProductResponse;
  } catch (error: any) {
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
}

export async function updateProduct(
  productId: string,
  updates: ProductRequest
) {
  try {
    await connectDB();
    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
    });
    if (!updatedProduct) throw new Error("Product not found");
    return updatedProduct as ProductResponse;
  } catch (error: any) {
    throw new Error(`Failed to update product: ${error.message}`);
  }
}

export async function deleteProduct(productId: string) {
  try {
    await connectDB();
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) throw new Error("Product not found");
    return deletedProduct;
  } catch (error: any) {
    throw new Error(`Failed to delete product: ${error.message}`);
  }
}
