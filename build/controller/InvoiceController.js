"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvoiceDao_1 = __importDefault(require("../dao/InvoiceDao"));
class InvoiceController extends InvoiceDao_1.default {
    listInvoice(req, res) {
        InvoiceController.listInvoice(res);
    }
    createInvoice(req, res) {
        InvoiceController.createInvoice(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
    deleteInvoice(req, res) {
        InvoiceController.deleteInvoice(req.params.codigo, res);
    }
    updateInvoice(req, res) {
        InvoiceController.updateInvoice(req.params.codigo, req.body, res);
    }
}
const invoiceController = new InvoiceController();
exports.default = invoiceController;
