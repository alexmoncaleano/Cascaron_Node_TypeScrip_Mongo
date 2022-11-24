"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InmuebleScheme = new mongoose_1.Schema({
    address: { type: String, required: true, unique: true, trim: true, lowercase: true },
    price: { type: Number, trim: true },
    city: { type: String, required: true, trim: true },
    bedrooms: { type: Number, required: true, trim: true },
    bathrooms: { type: Number, required: true, trim: true },
    location: { type: mongoose_1.Types.ObjectId, ref: "Location" }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Inmueble", InmuebleScheme, "Inmueble");
