"use server";
import { connectDB } from "../connection";
import { Order } from "../models/order.model";

export async function createOrder(
  userId: string,
  items: any[],
  shippingAddress: any
) {
  try {
    await connectDB();
    const totalAmount = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: userId,
      items,
      totalAmount,
      shippingAddress,
    });

    return order;
  } catch (error: any) {
    throw new Error(`Failed to create order: ${error.message}`);
  }
}
export async function getAllOrder() {
  try {
    await connectDB();
    const orders = await Order.find();
    return orders;
  } catch (error: any) {
    throw new Error("Failed to get all orders ", error.message);
  }
}
export async function getOrderById(orderId: string) {
  try {
    await connectDB();
    const order = await Order.findById(orderId).populate("user items.product");
    if (!order) throw new Error("Order not found");
    return order;
  } catch (error: any) {
    throw new Error(`Failed to fetch order: ${error.message}`);
  }
}

export async function updateOrder(orderId: string, updates: any) {
  try {
    await connectDB();
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, {
      new: true,
    });
    if (!updatedOrder) throw new Error("Order not found");
    return updatedOrder;
  } catch (error: any) {
    throw new Error(`Failed to update order: ${error.message}`);
  }
}

export async function deleteOrder(orderId: string) {
  try {
    await connectDB();
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) throw new Error("Order not found");
    return deletedOrder;
  } catch (error: any) {
    throw new Error(`Failed to delete order: ${error.message}`);
  }
}
