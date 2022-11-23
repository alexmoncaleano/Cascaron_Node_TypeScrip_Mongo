import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import ConexionDB from "./ConexionDB";
import apiPerfilRuta from "../rutes/PerfilRutes";
import apiGoodsRutes from "../rutes/GoodsRutes";
import apiUserRutes from "../rutes/UserRutes";
import apiSelectionRutes from "../rutes/SelectionRutes";
import seguridad from "../middleware/Seguridad";

class Servidor{
    //definimos la variable para configurar todo lo que ponemos hacer en la base
    public app: express.Application;
    //creamos un constructor
    constructor(){
        //primer paso del constructor
          //habilitar proyecto para usar variables de ambiente
        dotenv.config({path: "variables.env"})
        //Conectar a mongo
        ConexionDB();
        this.app=express();
        this.iniciarconfig();
        this.iniciarRutas();
    };

    public iniciarconfig(){
        this.app.set("PORT",process.env.PORT);//con esto le dijimos que el puerto de la base de datos esta asignada en las variables de ambiente
        this.app.use(cors());//con esto le dijimos que vamos a utilizar cors, es lo que nos permite bloquear o permitir accesos.
        this.app.use(morgan("dev"));//morgan nos pregunta como lo vamos a usar, con el dev le decimos que las respuestas nos las muestre en el dev en la consola
        this.app.use(express.json({limit:"50MB"})); //con esto le estamos diciendo que limite de archivos nos puede subir
        this.app.use(express.urlencoded({extended:true}));// con esta linea le estamos diciendo que la api puede recibir consultas de la manera antigua
    };

    public iniciarRutas(){
        this.app.use("/api/perfil",seguridad.verificarToken, apiPerfilRuta);
        this.app.use("/api/goods", apiGoodsRutes);
        this.app.use("/api/user", apiUserRutes);
        this.app.use("/api/selection", apiSelectionRutes);
    };

    public iniciarServidor(){
        this.app.listen(this.app.get("PORT"),()=>{
            console.log("backend listo en el puerto:",this.app.get("PORT"));
        });//le estamos diciendo que escuche (listen) el puerto
    }
};

export default Servidor;