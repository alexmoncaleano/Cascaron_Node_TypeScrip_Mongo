"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InvoiceController_1 = __importDefault(require("../controller/InvoiceController"));
class InvoiceRutes {
    constructor() {
        this.rutaApiInvoice = (0, express_1.Router)();
        this.configRuteInvoice();
    }
    ;
    configRuteInvoice() {
        this.rutaApiInvoice.get("/list", InvoiceController_1.default.listInvoice);
        this.rutaApiInvoice.post("/create", InvoiceController_1.default.createInvoice);
        this.rutaApiInvoice.delete("/delete/:codigo", InvoiceController_1.default.deleteInvoice);
        this.rutaApiInvoice.put("/update/:codigo", InvoiceController_1.default.updateInvoice);
    }
}
;
const invoiceRutes = new InvoiceRutes();
exports.default = invoiceRutes.rutaApiInvoice;
