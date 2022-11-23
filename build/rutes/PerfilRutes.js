"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PerfilController_1 = __importDefault(require("../controller/PerfilController"));
class PerfilRuta {
    constructor() {
        this.rutaApiPerfil = (0, express_1.Router)();
        this.configRutesPerfil();
    }
    configRutesPerfil() {
        this.rutaApiPerfil.get("/list", PerfilController_1.default.listPerfil);
        this.rutaApiPerfil.post("/create", PerfilController_1.default.createPerfil);
        this.rutaApiPerfil.delete("/delete/:codigo", PerfilController_1.default.deletePerfil);
        this.rutaApiPerfil.put("/update/:codigo", PerfilController_1.default.updatePerfil);
    }
}
const perfilRuta = new PerfilRuta();
exports.default = perfilRuta.rutaApiPerfil;
