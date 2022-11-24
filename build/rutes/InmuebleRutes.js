"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InmuebleController_1 = __importDefault(require("../controller/InmuebleController"));
class InmuebleRutes {
    //iniciamos la variable de ruta
    constructor() {
        this.rutaApiInmueble = (0, express_1.Router)();
        this.configRutesInmueble();
    }
    ;
    configRutesInmueble() {
        this.rutaApiInmueble.get("/list", InmuebleController_1.default.inmuebleList);
        this.rutaApiInmueble.get("/list/:codigo", InmuebleController_1.default.inmuebleFindOne);
        this.rutaApiInmueble.post("/properties", InmuebleController_1.default.inmuebleCreate);
        this.rutaApiInmueble.delete("/delete/:codigo", InmuebleController_1.default.deleteUser);
        this.rutaApiInmueble.put("/update/:codigo", InmuebleController_1.default.inmuebleUpdate);
    }
}
;
const inmuebleRutes = new InmuebleRutes();
exports.default = inmuebleRutes.rutaApiInmueble;
