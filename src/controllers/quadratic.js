import compare from "./compare.js";

function quadratic(tuercas, tornillos) {
  let n = tornillos.length
  let pares = [];
  let cont = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < tornillos.length; j++) {
      if (compare(tuercas[i].getSize(), tornillos[j].getSize()) === 0) {
        pares.push({ tuerca: tuercas[i], tornillo: tornillos[j] });

        j = n;
      }
      cont++
    }
  }
  console.log('Iteraciones de Cuadratica', cont);

  return pares;
}

export default quadratic