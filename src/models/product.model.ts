import mongoose, { Schema, type Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProduct>('Product', ProductSchema);
