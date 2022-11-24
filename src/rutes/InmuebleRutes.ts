import { Router } from "express";
import InmuebleController from "../controller/InmuebleController";

class InmuebleRutes{
    //se define una variable tipo router
    public rutaApiInmueble: Router;

    //iniciamos la variable de ruta
    constructor(){
        this.rutaApiInmueble = Router();
        this.configRutesInmueble();

    };
    public configRutesInmueble(): void{
        this.rutaApiInmueble.get("/list", InmuebleController.inmuebleList);
        this.rutaApiInmueble.get("/list/:codigo", InmuebleController.inmuebleFindOne);
        this.rutaApiInmueble.post("/properties", InmuebleController.inmuebleCreate);
        this.rutaApiInmueble.delete("/delete/:codigo", InmuebleController.deleteUser);
        this.rutaApiInmueble.put("/update/:codigo", InmuebleController.inmuebleUpdate);
    }

};

const inmuebleRutes = new InmuebleRutes();
export default inmuebleRutes.rutaApiInmueble;