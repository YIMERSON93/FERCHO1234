import { Genero } from "./Genero";

export class Pelicula {
    private _id: number;
    private _nombre: string;
    private _director: string;
    private _genero: Genero;
    private _duracion: number;
    private _año: number;
    private _calificacion: number;

    constructor(id: number, nombre: string, director: string, genero: Genero, duracion: number, año: number, calificacion: number) {
        this.id = id;
        this._nombre = nombre;
        this._director = director;
        this._genero = genero;
        this._duracion = duracion;
        this._año = año;
        this._calificacion = calificacion;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get director(): string {
        return this._director;
    }

    set director(director: string) {
        this._director = director;
    }

    get genero(): Genero {
        return this._genero;
    }

    set genero(genero: Genero) {
        this._genero = genero;
    }

    get duracion(): number {
        return this._duracion;
    }

    set duracion(value: number) {
        this._duracion = value;
    }

    get año(): number {
        return this._año;
    }

    set año(value: number) {
        this._año = value;
    }

    get calificacion(): number {
        return this._calificacion;
    }

    set calificacion(value: number) {
        this._calificacion = value;
    }

    imprimir() {
        console.log(`\tId: ${this._id}\n\tNombre: ${this._nombre}\n\tDirector: ${this._director}\n\tGenero: ${this._genero}\n\tDuración: ${this._duracion}\n\tAño: ${this._año}\n\tCalificacion: ${this._calificacion}\n`)
    }

    esPeliculaEpica(): Boolean {
        return this._calificacion > 8;
    }

    esSimilar(pelicula: Pelicula): Boolean {
        return this._genero === pelicula.genero
    }
}
