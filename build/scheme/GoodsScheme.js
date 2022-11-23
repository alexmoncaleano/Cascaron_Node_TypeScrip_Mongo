"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GoodsScheme = new mongoose_1.Schema({
    nameGoods: { type: String, required: true, trim: true },
    referenceGoods: { type: String, required: true, unique: true, trim: true },
    priceGoods: { type: Number, required: true, trim: true },
    descripGoods: { type: String, required: true, trim: true },
    animalGoods: { type: String, required: true, trim: true },
    amountGoods: { type: Number, required: true, trim: true },
    stocktakingGoods: { type: Number, required: true, trim: true },
    imagenGoods: { type: String }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Goods", GoodsScheme, "Goods");
