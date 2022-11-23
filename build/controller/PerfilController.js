"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PerfilDao_1 = __importDefault(require("../dao/PerfilDao"));
class PerfilController extends PerfilDao_1.default {
    listPerfil(req, res) {
        PerfilController.listPerfil(res);
    }
    createPerfil(req, res) {
        PerfilController.createPefil(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
    deletePerfil(req, res) {
        PerfilController.deletePerfil(req.params.codigo, res);
    }
    updatePerfil(req, res) {
        PerfilController.updatePerfil(req.params.codigo, req.body, res);
    }
    consultaUno(req, res) {
        PerfilController.obtenerUnPerfil(req.params.codigo, res);
    }
}
const perfilController = new PerfilController();
exports.default = perfilController;
