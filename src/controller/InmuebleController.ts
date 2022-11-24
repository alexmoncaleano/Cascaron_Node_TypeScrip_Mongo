import InmuebleDao from "../dao/InmuebleDao";
import { Request, Response } from "express";

class InmuebleController extends InmuebleDao {
  public inmuebleFindOne(req: Request, res: Response): void {
    InmuebleController.inmueblefindOne(req.params.codigo, res);
}
  public inmuebleList(req: Request, res: Response): void {
    InmuebleController.inmuebleList(res);
  }
  public inmuebleCreate(req: Request, res: Response): void {
    const address = {address:req.body.address}
    InmuebleController.inmuebleCreate(address, req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
  } 
  public deleteUser(req: Request, res: Response): void {
    InmuebleController.deleteUser(req.params.codigo, res);
  }
  public inmuebleUpdate(req: Request, res: Response): void {
    InmuebleController.inmuebleUpdate(req.params.codigo,req.body, res);
  }
}

const inmuebleController = new InmuebleController();
export default inmuebleController;