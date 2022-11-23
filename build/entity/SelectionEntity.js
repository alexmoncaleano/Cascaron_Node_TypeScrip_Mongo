"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionEntity = void 0;
class SelectionEntity {
    constructor(iduser, idgoods, amountgoods) {
        this.idUser = iduser;
        this.idGoods = idgoods;
        this.amountGoods = amountgoods;
        this.priceTotal = 0;
    }
}
exports.SelectionEntity = SelectionEntity;
exports.default = SelectionEntity;
