import Pieza from '../models/Pieza.js';
import { emparejarHashTable } from './linear.js';
import { quicksortEmparejar, iteracionesQuicksort } from './logarithm.js';
import { emparejarFuerzaBruta } from './quadratic.js';

function generarPiezas(n) {
    let tuercas = [];
    let tornillos = [];
    for (let i = 1; i <= n; i++) {
        tuercas.push(new Pieza('tuerca', i));
        tornillos.push(new Pieza('tornillo', i));
    }
    tuercas = tuercas.sort(() => Math.random() - 0.5);
    tornillos = tornillos.sort(() => Math.random() - 0.5);
    return { tuercas, tornillos };
}

function ejecutarAlgoritmos(n) {
    const { tuercas, tornillos } = generarPiezas(n);

    // Fuerza Bruta
    const paresFuerzaBruta = emparejarFuerzaBruta([...tuercas], [...tornillos]);
    console.log('Fuerza Bruta:', paresFuerzaBruta);

    // Hash Table
    const paresHashTable = emparejarHashTable([...tuercas], [...tornillos]);
    console.log('Hash Table:', paresHashTable);

    // Quicksort
    const tuercasCopia = [...tuercas];
    const tornillosCopia = [...tornillos];
    const start = performance.now();
    quicksortEmparejar(tuercasCopia, tornillosCopia, 0, n - 1);
    const end = performance.now();
    const tiempoQuicksort = end - start;
    const paresQuicksort = tuercasCopia.map((tuerca, index) => [tuerca, tornillosCopia[index]]);
    console.log('Quicksort - Iteraciones:', iteracionesQuicksort, 'Tiempo:', tiempoQuicksort, 'ms');
    console.log('Quicksort:', paresQuicksort);
}

ejecutarAlgoritmos(10);
