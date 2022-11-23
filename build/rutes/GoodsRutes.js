"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GoodsController_1 = __importDefault(require("../controller/GoodsController"));
class GoodsRutes {
    //iniciamos la variable de ruta
    constructor() {
        this.rutaApiGoods = (0, express_1.Router)();
        this.configrRutesGoods();
    }
    ;
    configrRutesGoods() {
        this.rutaApiGoods.get("/list", GoodsController_1.default.listGoods);
        this.rutaApiGoods.post("/create", GoodsController_1.default.createGoods);
        this.rutaApiGoods.delete("/delete/:codigo", GoodsController_1.default.deleteGoods);
        this.rutaApiGoods.put("/update/:codigo", GoodsController_1.default.updateGoods);
    }
}
;
const goodsRuta = new GoodsRutes();
exports.default = goodsRuta.rutaApiGoods;
