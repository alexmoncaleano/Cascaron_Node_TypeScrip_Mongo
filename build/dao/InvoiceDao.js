"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvoiceScheme_1 = __importDefault(require("../scheme/InvoiceScheme"));
class InvoiceDao {
    static listInvoice(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield InvoiceScheme_1.default.find().sort({ _id: -1 });
            res.status(200).json(datos);
        });
    }
    static createInvoice(parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield InvoiceScheme_1.default.findOne(parametros);
            if (existe) {
                res.status(400).json({ respuesta: "La Factura ya existe" });
            }
            else {
                const objInvoice = new InvoiceScheme_1.default(parametros);
                objInvoice.save((miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede crear la factura" });
                    }
                    else {
                        res.status(200).json({
                            respuesta: "Factura creada exitosamente",
                            codigo: miObjeto._id,
                        });
                    }
                });
            }
        });
    }
    static deleteInvoice(parametro, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield InvoiceScheme_1.default.findById(parametro).exec();
            if (existe) {
                InvoiceScheme_1.default.findOneAndDelete({ parametro }, (miError, miobjeto) => {
                    if (miError) {
                        res
                            .status(400)
                            .json({ respuesta: "No se puede eliminar la Factura" });
                    }
                    else {
                        res.status(200).json({
                            respuesta: "Factura eliminada correctamente",
                            eliminado: miobjeto.deletedCount,
                        });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "No existe la Factura" });
            }
        });
    }
    static updateInvoice(codigo, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const existe = await UserScheme.findById(codigo).exec();
            //const existe = await UserSheme.findById({_id:codigo});
            const existe = yield InvoiceScheme_1.default.findById(codigo).exec();
            if (existe) {
                InvoiceScheme_1.default.findByIdAndUpdate({ _id: codigo }, { $set: parametros }, (miError, miObjeto) => {
                    if (miError) {
                        res
                            .status(400)
                            .json({ Respuesta: "No se puede actualizar la factura" });
                    }
                    else {
                        res.status(200).json({
                            Respuesta: "Factura actualizado",
                            Antiguo: miObjeto,
                            Nuevo: parametros,
                        });
                    }
                });
            }
            else {
                res.status(400).json({ Respuesta: "La factura a actualizar no existe" });
            }
        });
    }
}
exports.default = InvoiceDao;
