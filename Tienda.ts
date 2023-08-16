import { Pelicula } from "./Pelicula";

export class Tienda {
    private _peliculasDisponibles: Pelicula[];
    private _peliculasAlquiladas: Pelicula[];

    constructor(peliculas: Pelicula[]) {
        this._peliculasDisponibles = peliculas;
        this._peliculasAlquiladas = [];
    }

    alquilarPelicula(idPelicula: number) {
        console.log(`Intentando alquilar pelicula: ${idPelicula}`);
        const indice = this._peliculasDisponibles.findIndex(pelicula => pelicula.id === idPelicula);

        if (indice === -1)
            console.error('Pelicula no disponible\n');
        else {
            const pelicula = this._peliculasDisponibles.splice(indice, 1)[0];

            this._peliculasAlquiladas.push(pelicula);
            console.log(`Pelicula: "${pelicula.nombre}" alquilada exitosamente\n`);
        }
    }

    mostrarCarteleraDisponible() {
        console.log('================================================================================================');
        if (this._peliculasDisponibles.length) {
            console.log('Cartelera disponible:\n');
            this._peliculasDisponibles.forEach(pelicula => pelicula.imprimir());
        } else
            console.log('No hay peliculas disponibles');

        console.log('================================================================================================\n');
    }

    get peliculasDisponibles(): Pelicula[] {
        return this._peliculasDisponibles;
    }

    get peliculasAlquiladas(): Pelicula[] {
        return this._peliculasAlquiladas;
    }
}