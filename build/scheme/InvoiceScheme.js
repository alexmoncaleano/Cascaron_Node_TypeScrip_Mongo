"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InvoiceScheme = new mongoose_1.Schema({
    idInvoice: { type: String, required: true, unique: true, trim: true },
    idUser: { type: String, required: true, unique: true, trim: true },
    idGoodsOne: { type: mongoose_1.Types.ObjectId, ref: "Goods", required: true },
    idGoodsTwo: { type: mongoose_1.Types.ObjectId, ref: "Goods", required: true },
    totalPrice: { type: Number, required: true, unique: true, trim: true },
    tax: { type: Number, required: true, unique: true, trim: true }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Invoice", InvoiceScheme, "Invoice");
