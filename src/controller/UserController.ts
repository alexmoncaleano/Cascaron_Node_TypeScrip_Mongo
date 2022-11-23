import UserDao from "../dao/UserDao";
import { Request, Response } from "express";

class UserController extends UserDao {
  public listUser(req: Request, res: Response): void {
    UserController.listUser(res);
  }
  public createUser(req: Request, res: Response): void {
    const email = {emailUser:req.body.emailUser}
    UserController.createUser(email, req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
  } 
  public deleteUser(req: Request, res: Response): void {
    UserController.deleteUser(req.params.codigo, res);
  }
  public updateUser(req: Request, res: Response): void {
    UserController.updateUser(req.params.codigo,req.body, res);
  }
}

const userController = new UserController();
export default userController;