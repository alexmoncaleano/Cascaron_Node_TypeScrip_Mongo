import { Request } from "express";
import { Schema, model, Types } from "mongoose";
import { LocationEntity } from "../entity/LocationEntity";

const LocationScheme = new Schema<LocationEntity>(
  {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  { versionKey: false }
);
export default model("Location", LocationScheme, "Location");