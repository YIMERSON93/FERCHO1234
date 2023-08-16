import { Genero } from "./Genero";
import { Pelicula } from "./Pelicula";
import { Tienda } from "./Tienda";

const peliculas: Pelicula[] = [
    new Pelicula(1, "Iron Man", "Jon Favreau", Genero.ACCION, 120, 2008, 9),
    new Pelicula(2, "El increíble Hulk", "Louis Leterrier", Genero.ACCION, 100, 2008, 7),
    new Pelicula(3, "Los Vengadores", "Joss Whedon", Genero.ACCION, 130, 2012, 10),
    new Pelicula(4, "Guardianes de la Galaxia", "James Gunn", Genero.ACCION, 127, 2014, 10),
    new Pelicula(5, "¡SÍ SEÑOR!", "Peyton Reed", Genero.COMEDIA, 103, 2009, 6),
    new Pelicula(6, "Click", "Frank Coraci", Genero.COMEDIA, 127, 2006, 8)
]

const tienda: Tienda = new Tienda(peliculas);

tienda.mostrarCarteleraDisponible();
tienda.alquilarPelicula(3);
tienda.mostrarCarteleraDisponible();
tienda.alquilarPelicula(4);
tienda.alquilarPelicula(1);
tienda.mostrarCarteleraDisponible();
tienda.alquilarPelicula(3);
tienda.alquilarPelicula(4);
tienda.mostrarCarteleraDisponible();
tienda.alquilarPelicula(2);
tienda.alquilarPelicula(5);
tienda.alquilarPelicula(6);
tienda.mostrarCarteleraDisponible();
