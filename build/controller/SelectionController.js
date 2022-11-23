"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SelectionDao_1 = __importDefault(require("../dao/SelectionDao"));
class SelectionController extends SelectionDao_1.default {
    listSelection(req, res) {
        const User = { idUser: req.body.idUser };
        SelectionController.listSelectionById(User, res);
    }
    createSelection(req, res) {
        SelectionController.createSelection(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
}
const selectionController = new SelectionController();
exports.default = selectionController;
