import Pieza from '../models/Pieza.js';

function emparejarHashTable(tuercas, tornillos) {
    const start = performance.now();
    let iteraciones = 0;

    let tabla = new Map();
    tuercas.forEach(tuerca => {
        iteraciones++;
        tabla.set(tuerca.getSize(), tuerca);
    });
    let pares = [];
    tornillos.forEach(tornillo => {
        iteraciones++;
        if (tabla.has(tornillo.getSize())) {
            pares.push([tabla.get(tornillo.getSize()), tornillo]);
        }
    });

    const end = performance.now();
    const tiempo = end - start;

    console.log('Hash Table - Iteraciones:', iteraciones, 'Tiempo:', tiempo, 'ms');

    return pares;
}

export { emparejarHashTable };
