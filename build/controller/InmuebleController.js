"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InmuebleDao_1 = __importDefault(require("../dao/InmuebleDao"));
class InmuebleController extends InmuebleDao_1.default {
    inmuebleFindOne(req, res) {
        InmuebleController.inmueblefindOne(req.params.codigo, res);
    }
    inmuebleList(req, res) {
        InmuebleController.inmuebleList(res);
    }
    inmuebleCreate(req, res) {
        const address = { address: req.body.address };
        InmuebleController.inmuebleCreate(address, req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
    deleteUser(req, res) {
        InmuebleController.deleteUser(req.params.codigo, res);
    }
    inmuebleUpdate(req, res) {
        InmuebleController.inmuebleUpdate(req.params.codigo, req.body, res);
    }
}
const inmuebleController = new InmuebleController();
exports.default = inmuebleController;
