import Pieza from '../models/Pieza.js';

function emparejarFuerzaBruta(tuercas, tornillos) {
    const start = performance.now();
    let iteraciones = 0;

    let pares = [];
    tuercas.forEach(tuerca => {
        for (let i = 0; i < tornillos.length; i++) {
            iteraciones++;
            if (comparar(tuerca, tornillos[i]) === 0) { // 0 indica coincidencia exacta
                pares.push([tuerca, tornillos[i]]);
                tornillos.splice(i, 1); // Remueve el tornillo emparejado
                break;
            }
        }
    });

    const end = performance.now();
    const tiempo = end - start;

    console.log('Fuerza Bruta - Iteraciones:', iteraciones, 'Tiempo:', tiempo, 'ms');

    return pares;
}

function comparar(tuerca, tornillo) {
    if (tuerca && tornillo) {
        if (tuerca.getSize() === tornillo.getSize()) return 0;
        return tuerca.getSize() < tornillo.getSize() ? -1 : 1;
    }
    throw new Error('Tuerca o tornillo indefinido');
}

export { emparejarFuerzaBruta };
