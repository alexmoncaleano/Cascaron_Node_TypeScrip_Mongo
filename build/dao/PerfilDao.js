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
const PerfilScheme_1 = __importDefault(require("../scheme/PerfilScheme"));
const UserScheme_1 = __importDefault(require("../scheme/UserScheme"));
class PerfilDao {
    static obtenerUnPerfil(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonPerfil = { _id: identificador };
            const existePerfil = yield PerfilScheme_1.default.findOne(jsonPerfil).exec();
            if (existePerfil) {
                res.status(200).json(existePerfil);
            }
            else {
                res
                    .status(400)
                    .json({ respuesta: "El perfil NO existe con ese identificador" });
            }
        });
    }
    //Creamos una promesa
    static listPerfil(res) {
        return __awaiter(this, void 0, void 0, function* () {
            //async es que es un metodo asincrono, Promise<any> Significa que puede no haber respuesta
            const datos = yield PerfilScheme_1.default.find().sort({ _id: -1 }); //el await es lo que le dice que espere la respuesta de la promesa, se tiene que utilizar siempre con async
            if (datos) {
                res.status(200).json(datos);
            }
            else {
                res.status(400).json({ respuesta: "NO existen perfiles" });
            }
        });
    }
    static createPefil(parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            delete parametros._id;
            delete parametros.datosUsuario;
            const existe = yield PerfilScheme_1.default.findOne(parametros);
            if (existe) {
                res.status(400).json({ respuesta: "El perfil ya existe" });
            }
            else {
                const objPerfil = new PerfilScheme_1.default(parametros);
                objPerfil.save((miError, objeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "Error al crear el Perfil" });
                    }
                    else {
                        res.status(200).json({ id: objeto._id });
                    }
                });
            }
        });
    }
    static deletePerfil(parametro, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const llave = { _id: parametro };
            const cantidad = yield UserScheme_1.default.countDocuments({ codPerfil: llave });
            if (cantidad > 0) {
                res
                    .status(400)
                    .json({ respuesta: "Error, el perfil tiene usuarios relacionados" });
            }
            else {
                const existe = yield PerfilScheme_1.default.findById(parametro).exec();
                if (existe) {
                    PerfilScheme_1.default.deleteOne({ _id: parametro }, (miError, objeto) => {
                        //PerfilEsquema.findByIdAndDelete(parametro, (miError: any, objeto: any) => {
                        if (miError) {
                            res
                                .status(400)
                                .json({ respuesta: "Error al eliminar el Perfil" });
                        }
                        else {
                            res.status(200).json({ eliminado: objeto });
                        }
                    });
                }
                else {
                    res.status(400).json({ respuesta: "El perfil NO existe" });
                }
            }
        });
    }
    static updatePerfil(codigo, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const existe = await UserScheme.findById(codigo).exec();
            //const existe = await UserSheme.findById({_id:codigo});
            const existe = yield PerfilScheme_1.default.findById(codigo).exec();
            if (existe) {
                PerfilScheme_1.default.findByIdAndUpdate({ _id: codigo }, { $set: parametros }, (miError, miObjeto) => {
                    if (miError) {
                        res
                            .status(400)
                            .json({ Respuesta: "No se puede actualizar el Perfil" });
                    }
                    else {
                        res.status(200).json({
                            Respuesta: "Perfil Actualizado",
                            Antiguo: miObjeto,
                            Nuevo: parametros,
                        });
                    }
                });
            }
            else {
                res.status(400).json({ Respuesta: "El perfil a actualizar no existe" });
            }
        });
    }
}
exports.default = PerfilDao; //para poder utilizar tu codigo en el proyecto tienes que importarlo.
