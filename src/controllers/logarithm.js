let iteracionesQuicksort = 0;

function quicksortEmparejar(tuercas, tornillos, low, high) {
    if (low < high) {
        let pivotIndex = partition(tuercas, tornillos, low, high);
        quicksortEmparejar(tuercas, tornillos, low, pivotIndex - 1);
        quicksortEmparejar(tuercas, tornillos, pivotIndex + 1, high);
    }
}

function partition(tuercas, tornillos, low, high) {
    let pivot = tornillos[low];
    let i = low;

    for (let j = low + 1; j <= high; j++) {
        iteracionesQuicksort++;
        if (comparar(tuercas[j], pivot) < 0) {
            i++;
            [tuercas[i], tuercas[j]] = [tuercas[j], tuercas[i]];
        }
    }
    [tuercas[low], tuercas[i]] = [tuercas[i], tuercas[low]];

    pivot = tuercas[i];
    let k = low;

    for (let j = low + 1; j <= high; j++) {
        iteracionesQuicksort++;
        if (comparar(pivot, tornillos[j]) < 0) {
            k++;
            [tornillos[k], tornillos[j]] = [tornillos[j], tornillos[k]];
        }
    }
    [tornillos[low], tornillos[k]] = [tornillos[k], tornillos[low]];

    return i;
}

function comparar(tuerca, tornillo) {
    if (tuerca && tornillo) {
        if (tuerca.getSize() === tornillo.getSize()) return 0;
        return tuerca.getSize() < tornillo.getSize() ? -1 : 1;
    }
    throw new Error('Tuerca o tornillo indefinido');
}

export { quicksortEmparejar, iteracionesQuicksort };
