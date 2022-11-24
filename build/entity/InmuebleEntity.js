"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleEntity = void 0;
//import { LocationEntity } from './LocationEntity';
class InmuebleEntity {
    //public location:LocationEntity;
    constructor(addre, pric, cit, bedroom, bathroom) {
        this.address = addre;
        this.price = pric;
        this.city = cit;
        this.bedrooms = bedroom;
        this.bathrooms = bathroom;
        //this.location=locatio;        
    }
}
exports.InmuebleEntity = InmuebleEntity;
exports.default = InmuebleEntity;
