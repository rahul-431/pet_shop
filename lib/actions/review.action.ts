"use server";
import { connectDB } from "../connection";
import { Product } from "../models/product.model";
import { Review } from "../models/review.model";

export async function createReview(
  userId: string,
  productId: string,
  rating: number,
  comment: string
) {
  try {
    await connectDB();
    const review = await Review.create({
      user: userId,
      product: productId,
      rating,
      comment,
    });
    await Product.findByIdAndUpdate(productId, {
      $push: {
        reviews: review._id,
      },
    });
    return review;
  } catch (error: any) {
    throw new Error(`Failed to create review: ${error.message}`);
  }
}
export async function getReviewsByProduct(productId: string) {
  try {
    await connectDB();
    const reviews = await Review.find({ product: productId }).populate("user");
    return reviews;
  } catch (error: any) {
    throw new Error(`Failed to fetch reviews: ${error.message}`);
  }
}
export async function updateReview(reviewId: string, updates: any) {
  try {
    await connectDB();
    const updatedReview = await Review.findByIdAndUpdate(reviewId, updates, {
      new: true,
    });
    if (!updatedReview) throw new Error("Review not found");
    return updatedReview;
  } catch (error: any) {
    throw new Error(`Failed to update review: ${error.message}`);
  }
}
export async function deleteReview(reviewId: string, productId: string) {
  try {
    await connectDB();
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    if (!deletedReview) throw new Error("Review not found");
    await Product.findByIdAndUpdate(productId, {
      $pull: {
        reviews: reviewId,
      },
    });
    return deletedReview;
  } catch (error: any) {
    throw new Error(`Failed to delete review: ${error.message}`);
  }
}
