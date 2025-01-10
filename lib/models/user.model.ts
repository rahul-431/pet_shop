import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    phone: { type: String },
    isAdmin: { type: Boolean, default: false },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cart" }],
    onboarded: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//predefined middleware
userSchema.pre("save", async function (next) {
  // Skip hashing if the password is not modified
  if (!this.isModified("password")) return next();

  // Check if the password exists (e.g., for Google authentication, it might be undefined)
  if (!this.password) return next();

  try {
    // Hash the password and assign it
    this.password = await bcrypt.hash(this.password as string, 10);
    next();
  } catch (error) {
    console.log("Failed to hash password"); // Pass the error to the next middleware or handler
  }
});

//custom middleware
userSchema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

//generating access token
userSchema.methods.generateAccessToken = async function () {
  if (!process.env.ACCESS_TOKEN_SECRET) return;
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
