"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SelectionController_1 = __importDefault(require("../controller/SelectionController"));
class SelectionRutes {
    //iniciamos la variable de ruta
    constructor() {
        this.rutaApiSelection = (0, express_1.Router)();
        this.configrRutesSelection();
    }
    ;
    configrRutesSelection() {
        this.rutaApiSelection.get("/list", SelectionController_1.default.listSelection),
            this.rutaApiSelection.post("/create", SelectionController_1.default.createSelection);
    }
}
;
const selectionRuta = new SelectionRutes();
exports.default = selectionRuta.rutaApiSelection;
