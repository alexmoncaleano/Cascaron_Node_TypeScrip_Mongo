"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
class UserRutes {
    //iniciamos la variable de ruta
    constructor() {
        this.rutaApiUser = (0, express_1.Router)();
        this.configRutesUser();
    }
    ;
    configRutesUser() {
        this.rutaApiUser.get("/list", UserController_1.default.listUser);
        this.rutaApiUser.post("/create", UserController_1.default.createUser);
        this.rutaApiUser.delete("/delete/:codigo", UserController_1.default.deleteUser);
        this.rutaApiUser.put("/update/:codigo", UserController_1.default.updateUser);
    }
}
;
const userRutes = new UserRutes();
exports.default = userRutes.rutaApiUser;
