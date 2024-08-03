import compare from "./compare.js";

function partition(arr, low, high, pivot) {
  let i = low;
  for (let j = low; j < high; j++) {
    if (compare(arr[j].getSize(), pivot.getSize()) < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    } else if (compare(arr[j].getSize(), pivot.getSize()) === 0) {
      [arr[j], arr[high]] = [arr[high], arr[j]];
      j--;
    }
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

function quicksortTuercasYTornillos(tuercas, tornillos, low, high) {
  if (low < high) {
    let pivotIndex = partition(tornillos, low, high, tuercas[low]);
    partition(tuercas, low, high, tornillos[pivotIndex]);

    quicksortTuercasYTornillos(tuercas, tornillos, low, pivotIndex - 1);
    quicksortTuercasYTornillos(tuercas, tornillos, pivotIndex + 1, high);
  }
}

function logarithm(tuercas, tornillos) {
  let pares = []
  let n = tuercas.length

  quicksortTuercasYTornillos(tuercas, tornillos, 0, n - 1)
  console.log();
  
  for (let i = 0; i < n; i++) {
    pares.push({ tuerca: tuercas[i], tornillo: tornillos[i] })
  }

  return pares
}

export default logarithm;