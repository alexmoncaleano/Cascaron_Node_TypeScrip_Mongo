"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleEntity = void 0;
class InmuebleEntity {
    constructor(addre, pric, cit, bedroom, bathroom, locatio) {
        this.address = addre;
        this.price = pric;
        this.city = cit;
        this.bedrooms = bedroom;
        this.bathrooms = bathroom;
        this.location = locatio;
    }
}
exports.InmuebleEntity = InmuebleEntity;
exports.default = InmuebleEntity;
