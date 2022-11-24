import { Request } from "express";
import { Schema, model, Types } from "mongoose";
import { InmuebleEntity } from "../entity/InmuebleEntity";

const InmuebleScheme = new Schema<InmuebleEntity>(
  {
    address: { type: String, required: true, unique: true, trim: true, lowercase: true },
    price: { type: Number,  trim: true },
    city: { type: String, required: true, trim: true },
    bedrooms: { type: Number, required: true, trim: true}, //lowercase: pasa todo a minusculas
    bathrooms: { type: Number, required: true, trim: true },
    location: { type: Types.ObjectId, ref: "Location"}
  },
  { versionKey: false }
);
export default model("Inmueble", InmuebleScheme, "Inmueble");