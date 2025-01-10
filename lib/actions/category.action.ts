"use server";
import { connectDB } from "../connection";
import { Category } from "../models/category.model";

export async function createCategory(data: any) {
  try {
    await connectDB();
    const category = await Category.create(data);
    return category;
  } catch (error: any) {
    throw new Error(`Failed to create category: ${error.message}`);
  }
}
export async function getAllCategory() {
  try {
    await connectDB();
    const categories = await Category.find();
    return categories;
  } catch (error: any) {
    throw new Error("Failed to get all categories ", error.message);
  }
}

export async function getCategoryById(categoryId: string) {
  try {
    await connectDB();
    const category = await Category.findById(categoryId);
    if (!category) throw new Error("Category not found");
    return category;
  } catch (error: any) {
    throw new Error(`Failed to fetch category: ${error.message}`);
  }
}

export async function updateCategory(categoryId: string, updates: any) {
  try {
    await connectDB();
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      { new: true }
    );
    if (!updatedCategory) throw new Error("Category not found");
    return updatedCategory;
  } catch (error: any) {
    throw new Error(`Failed to update category: ${error.message}`);
  }
}

export async function deleteCategory(categoryId: string) {
  try {
    await connectDB();
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) throw new Error("Category not found");
    return deletedCategory;
  } catch (error: any) {
    throw new Error(`Failed to delete category: ${error.message}`);
  }
}
