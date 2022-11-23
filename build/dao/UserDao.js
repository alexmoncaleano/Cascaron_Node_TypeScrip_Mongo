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
const UserScheme_1 = __importDefault(require("../scheme/UserScheme"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserDao {
    static listUser(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield UserScheme_1.default.find().sort({ _id: -1 }).populate("codPerfil").exec();
            res.status(200).json(datos);
        });
    }
    static createUser(emailUser, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield UserScheme_1.default.findOne(emailUser).exec();
            if (existe) {
                res.status(400).json({ respuesta: "El correo ya existe" });
            }
            else {
                parametros.passwordUser = bcryptjs_1.default.hashSync(parametros.passwordUser, 10);
                const objUser = new UserScheme_1.default(parametros);
                objUser.save((miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "No se puede crear el usuario" });
                    }
                    else {
                        const datosVisibles = {
                            codUser: miObjeto._id,
                            emailUser: miObjeto.emailUser
                        };
                        const privateKey = String(process.env.CLAVE_SECRETA);
                        const token = jsonwebtoken_1.default.sign(datosVisibles, privateKey, { expiresIn: 86400 });
                        res.status(200).json({
                            token: token
                        });
                    }
                });
            }
        });
    }
    static deleteUser(parametro, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield UserScheme_1.default.findById(parametro);
            if (existe) {
                UserScheme_1.default.deleteOne({ parametro }, (miError, miObjeto) => {
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
    static updateUser(codigo, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const existe = await UserScheme.findById(codigo).exec();
            //const existe = await UserSheme.findById({_id:codigo});
            const existe = yield UserScheme_1.default.findById(codigo).exec();
            if (existe) {
                UserScheme_1.default.findByIdAndUpdate({ _id: codigo }, { $set: parametros }, (miError, miObjeto) => {
                    if (miError) {
                        res.status(400).json({ Respuesta: "No se puede actualizar el Usuario" });
                    }
                    else {
                        res
                            .status(200)
                            .json({
                            Respuesta: "Usuario Actualizado",
                            Antiguo: miObjeto,
                            Nuevo: parametros
                        });
                    }
                });
            }
            else {
                res.status(400).json({ Respuesta: "El Usuario a actualizar no existe" });
            }
        });
    }
}
exports.default = UserDao;
