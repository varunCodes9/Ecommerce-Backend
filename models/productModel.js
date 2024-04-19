import mongoose from "mongoose";


// REVIEW MODAL
const reviewSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "name is require"],
      },
      rating: {
        type: Number,
        default: 0,
      },
      comment: {
        type: String,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: [true, "user require"],
      },
    },
    { timestamps: true }
  );

// PROCUCT MODAL
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
    },
    description: {
      type: String,
      required: [true, "produvct description is required"],
    },
    price: {
      type: Number,
      required: [true, "product price is required"],
    },
    stock: {
      type: Number,
      required: [true, "product stock required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema)