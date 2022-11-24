import InmuebleScheme from "../scheme/InmuebleScheme";
import { Response } from "express";
import cifrar from "bcryptjs";
import jwt from "jsonwebtoken";


class InmuebleDao {
  protected static async inmuebleList(res: Response): Promise<any> {
    const datos = await InmuebleScheme.find().sort({ _id: -1 }).exec();
    res.status(200).json(datos);
  }
  protected static async inmueblefindOne(
    identificador: any,
    res: Response
  ): Promise<any> {
    const jsonInmueble = { _id: identificador };
    const existeInmueble = await InmuebleScheme.findOne(jsonInmueble).exec();
    if (existeInmueble) {
      res.status(200).json(existeInmueble);
    } else {
      res
        .status(400)
        .json({ respuesta: "NO existe un Inmueble con ese identificador" });
    }
  }
  
  protected static async inmuebleCreate(address:any, parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await InmuebleScheme.findOne(address).exec();
    if (existe) {
      res.status(400).json({ respuesta: "El inmueble ya existe"});
    } else {
      const objUser = new InmuebleScheme(parametros);
      objUser.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede crear el inmueble" });
        } else {
          res.status(200).json({
            respuesta: "Inmueble creado exitosamente",
            inmueble: miObjeto
             
          });
        }
      });
    }
  }
  public static async deleteUser(parametro: any, res: Response): Promise<any> {
    const existe = await InmuebleScheme.findById(parametro);
    if (existe) {
      InmuebleScheme.deleteOne({ parametro }, (miError: any, miObjeto: any) => {
        if (miError) {
          res
            .status(400)
            .json({ respuesta: "No se puede eliminar el Usuario" });
        } else {
          res.status(200).json({
            respuesta: "Usuario eliminado correctamente",
            eliminado: miObjeto.deletedCount,
          });
        }
      });
    } else {
      res.status(400).json({ respuesta: "No existe el Usuario" });
    }
  }
  protected static async inmuebleUpdate(codigo: string, parametros: any, res: Response): Promise<any> {
    //const existe = await inmuebleScheme.findById(codigo).exec();
    //const existe = await inmuebleSheme.findById({_id:codigo});
    const existe = await InmuebleScheme.findById(codigo).exec();
    if(existe){
      InmuebleScheme.findByIdAndUpdate(
        {_id:codigo},
        {$set:parametros},
        (miError: any, miObjeto: any) => {
          if (miError) {
            res.status(400).json({Respuesta: "No se puede actualizar el Inmueble"});
          }else {
            res
            .status(200)
            .json({
              Respuesta: "Inmueble Actualizado",
              Antiguo: miObjeto,
              Nuevo: parametros
            });
          }
        }
      );
    }else {
      res.status(400).json({Respuesta: "El Inmueble a actualizar no existe"});
    }
  }
}

export default InmuebleDao;
