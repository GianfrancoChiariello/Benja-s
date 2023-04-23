export interface Products {
    _id: string,
    producto: Object,
    marca: string,
    animal: string,
    etapa: string,
    empaque: string,
    peso: number,
    unidad: string,
    __v: number,
    idUser: string
}

export interface Tipos {
    marcas: string[],
    animales: string[],
    empaques: string[],
    pesos: number[],
    unidades: string[],
}

