export interface IBikeParametersResponse {
    dataset: string,
    timezone: string,
    rows: number,
    start: number,
    format: string,
    lang: string
}

export interface IBikeRecord {
    datasetid: string,
    recordid: string,
    fields: {
        stationcode: string,
        coordonnees_geo: [number, number],
        capacity: number,
        name: string
    },
    geometry: {
        type: string,
        coordinates: [number, number]
    },
    record_timestamp: Date
}

export interface IBikeResponse {
    nhits: number,
    parameters: IBikeParametersResponse,
    records: IBikeRecord[]
}