"use server";
import { connectDB } from "../connection";
import User from "../models/user.model";
import { Wishlist } from "../models/wishlist.model";

export async function addToWishlist(userId: string, productId: string) {
  try {
    await connectDB();
    const wishlist = await Wishlist.findOneAndUpdate(
      { user: userId },
      { $addToSet: { products: productId } },
      { new: true, upsert: true }
    );
    await User.findByIdAndUpdate(userId, {
      $push: {
        wishlist: productId,
      },
    });
    return wishlist;
  } catch (error: any) {
    throw new Error(`Failed to add to wishlist: ${error.message}`);
  }
}

export async function getWishlist(userId: string) {
  try {
    await connectDB();
    const wishlist = await Wishlist.findOne({ user: userId }).populate(
      "products"
    );
    if (!wishlist) throw new Error("Wishlist not found");
    return wishlist;
  } catch (error: any) {
    throw new Error(`Failed to fetch wishlist: ${error.message}`);
  }
}

export async function removeFromWishlist(userId: string, productId: string) {
  try {
    await connectDB();
    const wishlist = await Wishlist.findOneAndUpdate(
      { user: userId },
      { $pull: { products: productId } },
      { new: true }
    );
    await User.findByIdAndUpdate(userId, {
      $pull: {
        wishlist: productId,
      },
    });
    if (!wishlist) throw new Error("Wishlist not found");
    return wishlist;
  } catch (error: any) {
    throw new Error(`Failed to remove from wishlist: ${error.message}`);
  }
}
