"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Seguridad {
    verificarToken(req, res, next) {
        var _a;
        if (!req.headers.authorization) {
            res.status(401).json({ respuesta: "Sin credenciales" });
        }
        else {
            try {
                const keyPrivate = String(process.env.CLAVE_SECRETA); //clave_secreta viene de variables.env
                const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]; //divide en dos el token que llega y coge la segunda parte, solo el codigo y lo vuelve un texto 
                const dates = jsonwebtoken_1.default.verify(token, keyPrivate);
                req.body.datesUser = dates;
                next();
            }
            catch (Error) {
                res.status(401).json({ respuesta: "Credenciales invalidas" });
            }
        }
    }
}
const seguridad = new Seguridad();
exports.default = seguridad;
