"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const ConexionDB_1 = __importDefault(require("./ConexionDB"));
const InmuebleRutes_1 = __importDefault(require("../rutes/InmuebleRutes"));
class Servidor {
    //creamos un constructor
    constructor() {
        //primer paso del constructor
        //habilitar proyecto para usar variables de ambiente
        dotenv_1.default.config({ path: "variables.env" });
        //Conectar a mongo
        (0, ConexionDB_1.default)();
        this.app = (0, express_1.default)();
        this.iniciarconfig();
        this.iniciarRutas();
    }
    ;
    iniciarconfig() {
        this.app.set("PORT", process.env.PORT); //con esto le dijimos que el puerto de la base de datos esta asignada en las variables de ambiente
        this.app.use((0, cors_1.default)()); //con esto le dijimos que vamos a utilizar cors, es lo que nos permite bloquear o permitir accesos.
        this.app.use((0, morgan_1.default)("dev")); //morgan nos pregunta como lo vamos a usar, con el dev le decimos que las respuestas nos las muestre en el dev en la consola
        this.app.use(express_1.default.json({ limit: "50MB" })); //con esto le estamos diciendo que limite de archivos nos puede subir
        this.app.use(express_1.default.urlencoded({ extended: true })); // con esta linea le estamos diciendo que la api puede recibir consultas de la manera antigua
    }
    ;
    iniciarRutas() {
        this.app.use("/ngrok.io", InmuebleRutes_1.default);
    }
    ;
    iniciarServidor() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("backend listo en el puerto:", this.app.get("PORT"));
        }); //le estamos diciendo que escuche (listen) el puerto
    }
}
;
exports.default = Servidor;
