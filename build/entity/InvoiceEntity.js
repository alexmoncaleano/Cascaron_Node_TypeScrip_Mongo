"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceEntity = void 0;
class InvoiceEntity {
    constructor(idinvoice, iduser, idgoodsone, idgoodstwo, totalprice, Tax) {
        this.idInvoice = idinvoice;
        this.idUser = iduser;
        this.idGoodsOne = idgoodsone;
        this.idGoodsTwo = idgoodstwo;
        this.totalPrice = totalprice;
        this.tax = Tax;
    }
}
exports.InvoiceEntity = InvoiceEntity;
exports.default = InvoiceEntity;
