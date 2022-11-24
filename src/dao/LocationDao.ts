import LocationScheme from "../scheme/LocationScheme";
import { Response } from "express";
import cifrar from "bcryptjs";
import jwt from "jsonwebtoken";


class LocationDao {
  protected static async locationList(res: Response): Promise<any> {
    const datos = await LocationScheme.find().sort({ _id: -1 }).exec();
    res.status(200).json(datos);
  }
  protected static async locationfindOne(
    identificador: any,
    res: Response
  ): Promise<any> {
    const jsonInmueble = { _id: identificador };
    const existeInmueble = await LocationScheme.findOne(jsonInmueble).exec();
    if (existeInmueble) {
      res.status(200).json(existeInmueble);
    } else {
      res
        .status(400)
        .json({ respuesta: "NO existe una localizacion con ese identificador" });
    }
  }
  
  protected static async locationCreate(coodinates:any, parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await LocationScheme.findOne(coodinates).exec();
    if (existe) {
      res.status(400).json({ respuesta: "La location ya existe"});
    } else {
      const objLocation = new LocationScheme(parametros);
      objLocation.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede crear la location"});
        } else {
          res.status(200).json({
            respuesta: "Location creado exitosamente",
            inmueble: miObjeto
             
          });
        }
      });
    }
  }

  protected static async LocationUpdate(codigo: string, parametros: any, res: Response): Promise<any> {
    //const existe = await inmuebleScheme.findById(codigo).exec();
    //const existe = await inmuebleSheme.findById({_id:codigo});
    const existe = await LocationScheme.findById(codigo).exec();
    if(existe){
      LocationScheme.findByIdAndUpdate(
        {_id:codigo},
        {$set:parametros},
        (miError: any, miObjeto: any) => {
          if (miError) {
            res.status(400).json({Respuesta: "No se puede actualizar la location"});
          }else {
            res
            .status(200)
            .json({
              Respuesta: "Location Actualizada",
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

export default LocationDao;
