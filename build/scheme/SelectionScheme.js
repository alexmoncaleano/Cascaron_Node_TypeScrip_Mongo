"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SelectionScheme = new mongoose_1.Schema({
    idUser: { type: mongoose_1.Types.ObjectId, ref: "User", required: true },
    idGoods: { type: mongoose_1.Types.ObjectId, ref: "Goods", required: true },
    amountGoods: { type: Number, required: true },
    priceTotal: { type: Number, required: true }
}, { versionKey: false });
exports.default = (0, mongoose_1.model)("Selection", SelectionScheme, "Selection");
