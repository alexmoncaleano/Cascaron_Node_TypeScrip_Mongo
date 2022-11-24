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
const InmuebleScheme_1 = __importDefault(require("../scheme/InmuebleScheme"));
const LocationScheme_1 = __importDefault(require("../scheme/LocationScheme"));
class InmuebleDao {
    static inmuebleList(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield InmuebleScheme_1.default.find().sort({ _id: -1 }).populate("location").exec();
            ;
            res.status(200).json(datos);
        });
    }
    static inmueblefindOne(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonInmueble = { _id: identificador };
            const existeInmueble = yield InmuebleScheme_1.default.findOne(jsonInmueble).populate("location").exec();
            if (existeInmueble) {
                res.status(200).json(existeInmueble);
            }
            else {
                res
                    .status(400)
                    .json({ respuesta: "NO existe un Inmueble con ese identificador" });
            }
        });
    }
    static inmuebleCreate(address, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield InmuebleScheme_1.default.findOne(address).exec();
            if (existe) {
                res.status(400).json({ respuesta: "El inmueble ya existe" });
            }
            else {
                const objLocation = new LocationScheme_1.default(parametros.location);
                objLocation.save((miError, miLocation) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede crear la location" });
                    }
                    else {
                        parametros.location = miLocation;
                        const objUser = new InmuebleScheme_1.default(parametros);
                        objUser.save((miError, miObjeto) => {
                            if (miError) {
                                res.status(400).json({ miError });
                            }
                            else {
                                res.status(200).json({
                                    respuesta: "Inmueble creado exitosamente",
                                    inmueble: miObjeto
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    static deleteUser(parametro, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield InmuebleScheme_1.default.findById(parametro);
            if (existe) {
                InmuebleScheme_1.default.deleteOne({ parametro }, (miError, miObjeto) => {
                    if (miError) {
                        res
                            .status(400)
                            .json({ respuesta: "No se puede eliminar el Usuario" });
                    }
                    else {
                        res.status(200).json({
                            respuesta: "Usuario eliminado correctamente",
                            eliminado: miObjeto.deletedCount,
                        });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "No existe el Usuario" });
            }
        });
    }
    static inmuebleUpdate(codigo, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const existe = await inmuebleScheme.findById(codigo).exec();
            //const existe = await inmuebleSheme.findById({_id:codigo});
            const existe = yield InmuebleScheme_1.default.findById(codigo).exec();
            if (existe) {
                InmuebleScheme_1.default.findByIdAndUpdate({ _id: codigo }, { $set: parametros }, (miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ Respuesta: "No se puede actualizar el Inmueble" });
                    }
                    else {
                        res
                            .status(200)
                            .json({
                            Respuesta: "Inmueble Actualizado",
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
exports.default = InmuebleDao;
