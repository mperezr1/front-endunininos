import { ColegioPrueba } from "./colegioPrueba.model";

export class ParticipantePrueba {
    constructor(
        nombre: string,
        documento: string,
        imagen: string,
        colegio: ColegioPrueba,
        acudientes: Acudiente[],
    ){}
}

export class Acudiente {
    constructor(
        nombreCompleto: string
    ){}
}