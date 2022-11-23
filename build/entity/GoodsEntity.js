"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsEntity = void 0;
class GoodsEntity {
    constructor(nomG, referG, priceG, animalG, descripG, amountG, stockG, imagengoods) {
        this.nameGoods = nomG;
        this.referenceGoods = referG;
        this.priceGoods = priceG;
        this.animalGoods = animalG;
        this.descripGoods = descripG;
        this.amountGoods = amountG;
        this.stocktakingGoods = stockG;
        this.imagenGoods = imagengoods;
    }
}
exports.GoodsEntity = GoodsEntity;
exports.default = GoodsEntity;
