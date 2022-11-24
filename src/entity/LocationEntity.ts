//import { LocationEntity } from './LocationEntity';
export class LocationEntity{
    public type:string;
    public coordinates:[number];
    
    constructor(typ:string, coordina:[number]){  
        this.type=typ;
        this.coordinates= coordina;        
    }
}
export default LocationEntity;