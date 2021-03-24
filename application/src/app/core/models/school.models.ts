import { ICoordinate } from "./coordinate.models";
import { IJSON_LD } from "./jsonld.model";

export interface ISchoolJSON_LD {
    Latitude: IJSON_LD
    Longitude: IJSON_LD
    Region: IJSON_LD
    Ville: IJSON_LD
    adresse: IJSON_LD
    nom: IJSON_LD
}

export interface ISchool {
    coordinate: ICoordinate,
    region: string,
    ville: string,
    adresse: string,
    nom: string
}