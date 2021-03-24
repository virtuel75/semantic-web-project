export interface IBikeParametersResponse {
    dataset: string,
    timezone: string,
    rows: number,
    start: number,
    format: string,
    lang: string
}

export interface IBikeStation {
    datasetid: string,
    recordid: string,
    fields: {
        capacity: number,
        stationcode: string,
        coordonnees_geo: [number, number],
        name: string,
        dist: string
    },
    geometry: {
        type: string,
        coordinates: [number, number]
    },
    record_timestamp: Date,
}

export interface IBikeResponse {
    nhits: number,
    parameters: IBikeParametersResponse,
    records: IBikeStation[]
}