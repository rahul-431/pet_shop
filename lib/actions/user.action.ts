"use server";
import { connectDB } from "../connection";
import User from "../models/user.model";

export async function createUser(data: any) {
  try {
    await connectDB();
    const user = await User.create(data);
    return user;
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

export async function getUserById(userId: string) {
  try {
    await connectDB();
    const user = await User.findById(userId).populate("wishlist cart");
    if (!user) throw new Error("User not found");
    return user;
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function updateUser(userId: string, updates: any) {
  try {
    await connectDB();
    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });
    if (!updatedUser) throw new Error("User not found");
    return updatedUser;
  } catch (error: any) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
}

export async function deleteUser(userId: string) {
  try {
    await connectDB();
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) throw new Error("User not found");
    return deletedUser;
  } catch (error: any) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
}
