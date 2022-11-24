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
const LocationScheme_1 = __importDefault(require("../scheme/LocationScheme"));
class LocationDao {
    static locationList(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield LocationScheme_1.default.find().sort({ _id: -1 }).exec();
            res.status(200).json(datos);
        });
    }
    static locationfindOne(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonInmueble = { _id: identificador };
            const existeInmueble = yield LocationScheme_1.default.findOne(jsonInmueble).exec();
            if (existeInmueble) {
                res.status(200).json(existeInmueble);
            }
            else {
                res
                    .status(400)
                    .json({ respuesta: "NO existe una localizacion con ese identificador" });
            }
        });
    }
    static locationCreate(coodinates, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield LocationScheme_1.default.findOne(coodinates).exec();
            if (existe) {
                res.status(400).json({ respuesta: "La location ya existe" });
            }
            else {
                const objLocation = new LocationScheme_1.default(parametros);
                objLocation.save((miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede crear la location" });
                    }
                    else {
                        res.status(200).json({
                            respuesta: "Location creado exitosamente",
                            inmueble: miObjeto
                        });
                    }
                });
            }
        });
    }
    static LocationUpdate(codigo, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const existe = await inmuebleScheme.findById(codigo).exec();
            //const existe = await inmuebleSheme.findById({_id:codigo});
            const existe = yield LocationScheme_1.default.findById(codigo).exec();
            if (existe) {
                LocationScheme_1.default.findByIdAndUpdate({ _id: codigo }, { $set: parametros }, (miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ Respuesta: "No se puede actualizar la location" });
                    }
                    else {
                        res
                            .status(200)
                            .json({
                            Respuesta: "Location Actualizada",
                            Antiguo: miObjeto,
                            Nuevo: parametros
                        });
                    }
                });
            }
            else {
                res.status(400).json({ Respuesta: "El Inmueble a actualizar no existe" });
            }
        });
    }
}
exports.default = LocationDao;
