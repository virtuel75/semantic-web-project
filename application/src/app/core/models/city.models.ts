import { ICoordinate } from "./coordinate.models";

export interface ICity {
    name: string,
    code: string,
    coordinates: ICoordinate,
}