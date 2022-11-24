//import { LocationEntity } from './LocationEntity';
export class InmuebleEntity{
    public address:string;
    public price:number;
    public city:string;
    public bedrooms:number;
    public bathrooms:number;
    //public location:LocationEntity;
    
    constructor(addre:string, pric: number, cit: string, 
        bedroom:number, bathroom:number){//, locatio:LocationEntity  
        this.address=addre;
        this.price=pric;
        this.city=cit;
        this.bedrooms=bedroom;
        this.bathrooms=bathroom;
        //this.location=locatio;        
    }
}
export default InmuebleEntity;