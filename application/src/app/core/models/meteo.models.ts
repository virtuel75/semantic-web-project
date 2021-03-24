export interface IMeteoCloud {
    all: number
}

export interface IMeteoCoord {
    lon: number,
    lat: number
}

export interface IMeteoMain {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
}

export interface IMeteoSys {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number
}

export interface IMeteoWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface IMeteoWind {
    deg: number,
    speed: number
}

export interface IMeteoResponse {
    base: string,
    cloud: IMeteoCloud,
    cod: number,
    coord: IMeteoCoord,
    dt: number,
    id: number,
    main: IMeteoMain,
    sys: IMeteoSys,
    timezone: number,
    visibility: number,
    weather: IMeteoWeather[],
    wind: IMeteoWind
}

export interface IMeteo {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
    main: string,
    description: string,
}