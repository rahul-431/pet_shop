"use server";
import { connectDB } from "../connection";
import { Cart } from "../models/cart.model";
import User from "../models/user.model";

export async function createCart({ userId, items, totalAmount }: CartRequest) {
  try {
    await connectDB();
    const cart = await Cart.create({
      user: userId,
      items,
      totalAmount: totalAmount ?? 0,
    });
    await User.findByIdAndUpdate(userId, {
      $push: {
        cart: cart._id,
      },
    });
    return cart as CartResponse;
  } catch (error: any) {
    throw new Error(`Failed to create cart: ${error.message}`);
  }
}

export async function getCartByUserId(userId: string) {
  try {
    await connectDB();
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart) throw new Error("Cart not found");
    return cart as CartResponse;
  } catch (error: any) {
    throw new Error(`Failed to fetch cart: ${error.message}`);
  }
}

export async function updateCart(cartId: string, updates: CartRequest) {
  try {
    await connectDB();
    const updatedCart = await Cart.findByIdAndUpdate(cartId, updates, {
      new: true,
    });
    if (!updatedCart) throw new Error("Cart not found");
    return updatedCart as CartResponse;
  } catch (error: any) {
    throw new Error(`Failed to update cart: ${error.message}`);
  }
}

export async function deleteCart(cartId: string, userId: string) {
  try {
    await connectDB();
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    await User.findByIdAndUpdate(userId, {
      $pull: {
        cart: cartId,
      },
    });
    if (!deletedCart) throw new Error("Cart not found");
    return deletedCart;
  } catch (error: any) {
    throw new Error(`Failed to delete cart: ${error.message}`);
  }
}
