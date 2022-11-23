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
const SelectionScheme_1 = __importDefault(require("../scheme/SelectionScheme"));
const GoodsScheme_1 = __importDefault(require("../scheme/GoodsScheme"));
class SelectionDao {
    static listSelectionById(idUser, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield SelectionScheme_1.default.find(idUser).sort({ _id: -1 }).populate("idGoods").exec();
            res.status(200).json(datos);
        });
    }
    static createSelection(parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const goods = yield GoodsScheme_1.default.findById(parametros.idGoods).exec();
            if (parametros.amountGoods <= 0) {
                res
                    .status(400)
                    .json({ respuesta: "Seleccione la cantidad de articulos" });
            }
            else {
                if (goods === null || goods === void 0 ? void 0 : goods.stocktakingGoods) {
                    if (goods.stocktakingGoods >= parametros.amountGoods) {
                        if (goods === null || goods === void 0 ? void 0 : goods.priceGoods) {
                            parametros.priceTotal = goods.priceGoods * parametros.amountGoods;
                            const objSelec = new SelectionScheme_1.default(parametros);
                            objSelec.save((miError, miObjeto) => {
                                if (miError) {
                                    res
                                        .status(400)
                                        .json({ respuesta: "No se puede crear la seleccion" });
                                }
                                else {
                                    res.status(200).json({ respuesta: miObjeto });
                                }
                            });
                        }
                        else {
                            res
                                .status(400)
                                .json({ respuesta: "Datos incompletos en el articulo" });
                        }
                    }
                    else {
                        res
                            .status(400)
                            .json({ respuesta: "La cantidad requerida supera el inventario" });
                    }
                }
                else {
                    res.status(400).json({ respuesta: "Inventario inexistente" });
                }
            }
        });
    }
}
exports.default = SelectionDao;
