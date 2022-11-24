"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LocationScheme = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Location", LocationScheme, "Location");
